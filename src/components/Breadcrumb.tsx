import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation, matchRoutes, RouteMatch } from 'react-router-dom';
import { selectBreadcrumb, setBreadcrumb } from '@/store/reducer/layoutSlice';
import { IRoute, layoutRoutesConfig as routes } from '@/router/routes';
import Icon, { IconType } from '@/components/Icons';

type BreadcrumbItem = string | { name: string; path?: string; icon?: IconType };

export type BreadcrumbType = Array<BreadcrumbItem>;

/**
 * Layout面包屑
 * @param {BreadcrumbType} data
 * @returns
 */
export default function LayoutBreadcrumb() {
  const breadcrumb = useAppSelector(selectBreadcrumb);
  useBreadcrumbFormRoutes({ routes });
  return breadcrumb.length > 0 ? (
    <Breadcrumb separator="/">
      {breadcrumb.map((item, index) => {
        if (typeof item === 'object') {
          return (
            <Breadcrumb.Item key={index}>
              {item.icon && (
                <Icon type={item.icon} style={{ marginRight: 8 }} />
              )}
              {item.path ? <Link to={item.path}>{item.name}</Link> : item.name}
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
      const breadcrumb = mapRouteMatchToBreadcrmb(
        parentRouteMatch!.concat(currentRouteMatch!.at(-1)!)
      );
      dispatch(setBreadcrumb(breadcrumb as BreadcrumbType));
    } else {
      const breadcrumb = mapRouteMatchToBreadcrmb(currentRouteMatch!);
      dispatch(setBreadcrumb(breadcrumb));
    }
  }, [location]);
}

function mapRouteMatchToBreadcrmb(
  routeMatch: Array<RouteMatch>
): BreadcrumbType {
  return routeMatch?.map((item, index, arr) => {
    const routeConfig = item.route as IRoute;
    if (index === arr.length - 1) {
      return routeConfig.name as BreadcrumbItem;
    }
    return {
      name: routeConfig.name,
      path: routeConfig.componentPath ? routeConfig.key : undefined,
      icon: routeConfig.icon
    } as BreadcrumbItem;
  });
}
