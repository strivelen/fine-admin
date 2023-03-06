import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation, matchRoutes } from 'react-router-dom';
import { selectBreadcrumb, setBreadcrumb } from '@/store/reducer/layoutSlice';
import { IRoute, layoutRoutesConfig as routes } from '@/router/routes';

type BreadcrumbItem = string | { name: string; path: string };

export type Breadcrumb = Array<BreadcrumbItem>;

/**
 * Layout面包屑
 * @param {Array<String | {name: String; path: String}>} data
 * @returns
 */
export default function LayoutBreadcrumb() {
  const breadcrumb = useAppSelector(selectBreadcrumb);
  useBreadcrumbFormRoutes({ routes });
  return breadcrumb.length > 0 ? (
    <Breadcrumb separator=">">
      {breadcrumb.map((item, index) => {
        if (typeof item === 'object') {
          return (
            <Breadcrumb.Item key={index}>
              <Link to={item.path}>{item.name}</Link>
            </Breadcrumb.Item>
          );
        }
        return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  ) : (
    <div style={{ height: 16 }} />
  );
}

/**
 * 渲染来自路由配置的面包屑
 */
function useBreadcrumbFormRoutes({ routes }: { routes: IRoute[] }) {
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const currentRouteMatch = matchRoutes(routes, location);
    const currentRouteConfig = currentRouteMatch?.at(-1)?.route;
    if (currentRouteConfig?.parentKey) {
      const parentRouteMatch = matchRoutes(
        routes,
        `/${currentRouteConfig?.parentKey}`
      );
      const breadcrumb =
        parentRouteMatch
          ?.map((item) => item.route.name)
          .filter((item) => !!item) || [];
      currentRouteConfig.name && breadcrumb.push(currentRouteConfig.name);
      dispatch(setBreadcrumb(breadcrumb as Breadcrumb));
    } else {
      const breadcrumb = currentRouteMatch
        ?.map((item) => {
          return item.route.name;
        })
        .filter((item) => !!item) as Breadcrumb;
      dispatch(setBreadcrumb(breadcrumb));
    }
  }, [location]);
}
