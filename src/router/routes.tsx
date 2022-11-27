import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import RouterAuth from './RouterAuth';
import { ErrorPage } from './ErrorBoundary';

const Layout = lazy(() => import('@/components/Layout'));
const Login = lazy(() => import('@/pages/login/Login'));
const NotFound = lazy(() => import('@/pages/404'));
const Home = lazy(() => import('@/pages/home'));
const Components = lazy(() => import('@/pages/components'));
const List = lazy(() => import('@/pages/list'));
const CustomBreadcrumb = lazy(() => import('@/pages/custom-breadcrumb'));
const ProForm = lazy(() => import('@/pages/pro-form'));

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <RouterAuth />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: 'home',
            element: <Home />
          },
          {
            path: 'list',
            element: <List />,
            children: [
              {
                path: ':id',
                element: <List />
              }
            ]
          },
          {
            path: 'components',
            element: <Components />,
            children: [
              { index: true, element: <Components /> },
              { path: 'customBreadcrumb', element: <CustomBreadcrumb /> },
              { path: 'pro-form', element: <ProForm /> }
            ]
          },
          {
            path: '*',
            element: <NotFound />
          }
        ]
      }
    ]
  }
];

export default createBrowserRouter(routes);
