/**
 * 手动配置文件
 */
import type { IRoute } from '@/router/routes';

// 应用相关
export const AppName = '后台管理系统';
export const ThemeColors = [
  '#1677ff',
  '#ee3f4d',
  '#c08eaf',
  '#95509f',
  '#722ed1',
  '#00b96b',
  '#7cb305',
  '#13c2c2',
  '#d6a01d'
];

// 请求相关
export const ApiBaseUrl =
  'https://www.fastmock.site/mock/d6f0134049a0e22b01d7aae6fafc9045/api';
export const ApiTimeout = 30000;
export const ApiSessionKey = 'sessionkey';
export type HttpStatusCode = keyof typeof HttpStatus;
export const HttpStatus = {
  // 与后台约定可能返回的状态码（不是http的响应状态码）
  200: '请求成功',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求错误，未找到该资源',
  408: '请求超时',
  500: '服务器发生错误',
  501: '服务未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'HTTP版本不受支持'
};
export interface DTO<ResDataType = any> {
  Code: HttpStatusCode;
  Data: ResDataType;
  Message: string | undefined;
  Success: boolean;
}

// Table数据相关
export const PageSize = 20; // 每页多少条数据

// 路由 & 菜单 & 面包屑 配置
export const isRenderServerMenu = false; // 是否使用服务端菜单数据
export const routes: IRoute[] = [
  {
    path: 'login',
    componentPath: 'login/Login',
    layoutRender: false
  },
  {
    key: 'dashboard',
    name: 'Dashboard',
    path: '/',
    componentPath: 'dashboard',
    menuRender: false,
    parentKey: 'dashboard'
  },
  {
    path: 'dashboard',
    componentPath: 'dashboard',
    name: 'Dashboard',
    key: 'dashboard',
    icon: 'DashboardOutlined'
  },
  {
    path: 'form',
    name: '表单页',
    key: 'form',
    icon: 'FormOutlined',
    children: [
      {
        path: 'basic-form',
        componentPath: 'form/basic-form',
        name: '基础表单',
        key: 'form/basic-form'
      },
      {
        path: 'step-form',
        componentPath: 'form/step-form',
        name: '分布表单',
        key: 'form/step-form'
      }
    ]
  },
  {
    path: 'list',
    name: '列表页',
    key: 'list',
    icon: 'TableOutlined',
    children: [
      {
        path: 'search',
        componentPath: 'list/search',
        name: '搜索列表',
        key: 'list/search'
      },
      {
        path: 'table-list',
        componentPath: 'list/table-list',
        name: '查询列表',
        key: 'list/table-list'
        // menuRender: false
      }
    ]
  },
  {
    path: 'profile',
    name: '详情页',
    key: 'profile',
    icon: 'ProfileOutlined',
    children: [
      {
        path: 'basic',
        componentPath: 'profile/basic',
        name: '基础详情页',
        key: 'profile/basic'
      },
      {
        path: 'advanced',
        componentPath: 'profile/advanced',
        name: '高级详情页',
        key: 'profile/advanced'
      }
    ]
  },
  {
    path: 'result',
    name: '结果页',
    key: 'result',
    icon: 'CheckCircleOutlined',
    children: [
      {
        path: 'success',
        componentPath: 'result/success',
        name: '成功页',
        key: 'result/success'
      },
      {
        path: 'fail',
        componentPath: 'result/fail',
        name: '失败页',
        key: 'result/fail'
      }
    ]
  },
  {
    path: 'setting',
    name: '系统设置',
    key: 'setting',
    icon: 'SettingOutlined',
    children: [
      {
        path: 'my-info',
        componentPath: 'my-info',
        name: '我的信息',
        key: 'setting/my-info'
      },
      {
        path: 'change-password',
        componentPath: 'change-password',
        name: '修改密码',
        key: 'setting/change-password'
      }
    ]
  },
  // {
  //   path: 'test',
  //   componentPath: 'test',
  //   menuRender: false,
  //   parentKey: 'result/success'
  // }
  {
    // path: 'more-level-menu',
    // menuRender: false,
    name: '多级菜单',
    key: 'more-level-menu',
    icon: 'UnorderedListOutlined',
    children: [
      {
        name: '二级菜单',
        key: 'two-level',
        children: [
          {
            name: '三级菜单',
            key: 'three-level',
            icon: 'SettingOutlined',
            children: [
              {
                path: 'test',
                componentPath: 'test',
                name: '四级菜单',
                key: 'test'
                // menuRender: false,
                // parentKey: 'setting/my-info'
              }
            ]
          }
        ]
      }
    ]
  }
];
