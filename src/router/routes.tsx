import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  generateRoutes,
  getLayoutRoutes,
  getNoLayoutRoutes
} from './router.helper';
import RouterAuth from './RouterAuth';
import type { IconType } from '@/components/Icons';
import { routes } from '@/config';

// const modules = import.meta.glob('../pages/*/*.tsx');
// console.log(modules);

export interface IRoute {
  path?: string; // url
  componentPath?: string; // 页面组件地址，基于pages文件夹下
  name?: string; // 菜单名称 同时也是面包屑名称
  key?: string; // 菜单key 同时也是菜单path
  icon?: IconType;
  access?: string;
  breadcrumb?: boolean;
  children?: Array<IRoute>;
  layoutRender?: false;
  menuRender?: false;
  /**
   * 当打开一个非菜单页面（也就是页面的menuRender为false）想让菜单的某一项高亮，那么把此属性设为高亮菜单页面的key。
   */
  parentKey?: string;
}
// export interface IRouteSetting {}

const ErrorPage = lazy(() => import('@/components/ErrorBoundary'));
const Layout = lazy(() => import('@/components/Layout'));
const NotFound = lazy(() => import('@/pages/404'));

const layoutRoutesConfig = getLayoutRoutes(routes);

const noLayoutRoutesConfig = getNoLayoutRoutes(routes);

export default createBrowserRouter(
  [
    {
      errorElement: <ErrorPage />,
      element: <Layout />,
      children: generateRoutes(layoutRoutesConfig)
    },
    {
      errorElement: <ErrorPage />,
      children: generateRoutes(noLayoutRoutesConfig)
    },
    {
      path: '*',
      element: <NotFound />
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
);
