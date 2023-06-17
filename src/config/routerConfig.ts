/**
 * 路由器相关配置
 */

export type LayoutType = 'default' | false;

interface RouteConfig {
  layout: LayoutType;
  auth: boolean;
  // wrappers?: Array<any>;
}

export const defaultRouteConfig: RouteConfig = {
  layout: 'default',
  auth: true
};

export const routesConfig: { [propName: string]: RouteConfig } = {
  '/login': {
    layout: false,
    auth: false
  }
};
