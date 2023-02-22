import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import RouterAuth from './RouterAuth';
import { ErrorPage } from '@/components/ErrorBoundary';

const Layout = lazy(() => import('@/components/Layout'));
const Login = lazy(() => import('@/pages/login/Login'));
const NotFound = lazy(() => import('@/pages/404'));
const Test = lazy(() => import('@/pages/test'));
const ChangePassword = lazy(() => import('@/pages/change-password'));
const Components = lazy(() => import('@/pages/components'));
const CustomBreadcrumb = lazy(() => import('@/pages/custom-breadcrumb'));
const ProForm = lazy(() => import('@/pages/pro-form'));
const MyInfo = lazy(() => import('@/pages/my-info'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const BasicForm = lazy(() => import('@/pages/form/basic-form'));
const StepForm = lazy(() => import('@/pages/form/step-form'));
const Search = lazy(() => import('@/pages/list/search'));
const TableList = lazy(() => import('@/pages/list/table-list'));
const ProfileBasic = lazy(() => import('@/pages/profile/basic'));

export const routes: RouteObject[] = [
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        element: <RouterAuth />,
        children: [
          {
            path: '/',
            element: <Layout />,
            children: [
              {
                index: true,
                element: <Dashboard />
              },
              {
                path: 'form',
                children: [
                  {
                    path: 'basic-form',
                    element: <BasicForm />
                  },
                  {
                    path: 'step-form',
                    element: <StepForm />
                  }
                ]
              },
              {
                path: 'list',
                children: [
                  {
                    path: 'search',
                    element: <Search />
                  },
                  {
                    path: 'table-list',
                    element: <TableList />
                  }
                ]
              },
              {
                path: 'profile',
                children: [
                  {
                    path: 'basic',
                    element: <ProfileBasic />
                  }
                ]
              },
              {
                path: 'my-info',
                element: <MyInfo />
              },
              {
                path: 'change-password',
                element: <ChangePassword />
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
                path: 'test',
                element: <Test />
              },
              {
                path: '*',
                element: <NotFound />
              }
            ]
          }
        ]
      }
    ]
  }
];

export default createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL
});
