import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  generateRoutes,
  getLayoutRoutes,
  getNoLayoutRoutes
} from './router.helper';
import RouterAuth from './RouterAuth';
import type { IconType } from '@/components/Icons';
import config from '@/config';
import type { MergeExclusive, SetOptional } from 'type-fest';

// const modules = import.meta.glob('../pages/*/*.tsx');
// console.log(modules);

type CustomRoute = Required<
  Omit<MenuItemRoute, 'key' | 'name' | 'icon' | 'parentKey' | 'menuRender'>
> & {
  layoutRender?: false;
};

interface BaseMenuItem {
  // 菜单key 同时也是菜单path
  key: string;
  // 菜单名称 同时也是面包屑名称
  name: string;
  icon?: IconType;
  // layoutRender?: false;
  // access?: string;
  // breadcrumb?: boolean;
  path: string;
  // 页面组件地址，基于pages文件夹下
  componentPath: string;
}

interface NoStateMenuItem extends BaseMenuItem {
  menuRender: false;
  // 当打开一个非菜单页面（也就是页面的menuRender为false）想让菜单的某一项高亮，那么把此属性设为高亮菜单页面的key。
  parentKey?: string;
}

type MenuItemRoute = MergeExclusive<BaseMenuItem, NoStateMenuItem>;

type MenuFoldRoute = SetOptional<
  Omit<MenuItemRoute, 'componentPath' | 'layoutRender' | 'parentKey'>,
  'path'
> & {
  children: Array<MergeExclusive<MenuItemRoute, MenuFoldRoute>>;
};

export type MenuRoute = MergeExclusive<MenuItemRoute, MenuFoldRoute>;

export type IRoute = MergeExclusive<CustomRoute, MenuRoute>;

const ErrorPage = lazy(() => import('@/components/ErrorBoundary'));
const Layout = lazy(() => import('@/components/Layout'));
const NotFound = lazy(() => import('@/pages/404'));

export const layoutRoutesConfig = getLayoutRoutes(config.routes);

const noLayoutRoutesConfig = getNoLayoutRoutes(config.routes);

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
