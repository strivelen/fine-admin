import type { RouteObject } from 'react-router-dom';
import type { IRoute, MenuRoute } from './routes';

/**
 * 从路由配置中获取具有Layout的routes
 * @param {Array<IRoute>} routes
 * @returns
 */
export const getLayoutRoutes = function (routes: IRoute[]) {
  const layoutRoutes: IRoute[] = [];
  routes.forEach((route) => {
    const _route = { ...route };
    if (_route.layoutRender !== false) {
      if (_route.children) {
        _route.children = getLayoutRoutes(_route.children) as MenuRoute[];
      }
      layoutRoutes.push(_route);
    }
  });
  return layoutRoutes;
};

/**
 * 从路由配置中获取不需要Layout的routes
 * @param {Array<IRoute>} routes
 * @returns
 */
export const getNoLayoutRoutes = function (routes: IRoute[]) {
  const noLayoutRoutes: IRoute[] = [];
  routes.forEach((route) => {
    const _route = { ...route };
    if (_route.children) {
      _route.children = getNoLayoutRoutes(_route.children) as MenuRoute[];
    }
    if (_route.layoutRender === false || (_route.children || []).length) {
      noLayoutRoutes.push(_route);
    }
  });
  return noLayoutRoutes;
};

/**
 * 将路由配置转化为react-router-dom用配置
 * @param {Array<IRoute>} routes
 * @returns
 */
export const generateRoutes = function (routes: IRoute[]) {
  return routes.map((route) => {
    let routeItem: RouteObject = {
      path: route.path
    };
    if (route.componentPath) {
      const PageComponent = lazy(
        () => import(/* @vite-ignore */ `../pages/${route.componentPath}`)
      );
      routeItem.element = <PageComponent />;
    }
    if (route.children) {
      routeItem.children = generateRoutes(route.children);
    }
    return routeItem;
  });
};
