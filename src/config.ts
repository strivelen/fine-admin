import type { DynamicIconKeys } from '@/components/DynamicIcons';
/**
 * 配置文件
 */

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

// 菜单相关
export const IsUseServerMenu = false; // 是否使用服务端菜单数据
export const MenuData: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'DashboardOutlined',
    route: '/'
  },
  {
    label: '表单页',
    icon: 'FormOutlined',
    children: [
      {
        label: '基础表单',
        route: '/form/basic-form'
      },
      {
        label: '分布表单',
        route: '/form/step-form'
      }
    ]
  },
  {
    label: '列表页',
    icon: 'TableOutlined',
    children: [
      {
        label: '搜索列表',
        route: '/list/search'
      }
    ]
  },
  {
    label: '订单管理',
    icon: 'UnorderedListOutlined',
    children: [
      {
        label: '采购订单',
        children: [
          {
            label: '三级菜单',
            icon: 'LinkOutlined',
            children: [
              {
                label: '四级菜单',
                route: '/order/list/123/'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: '用户管理',
    icon: 'UserOutlined',
    children: [
      {
        label: '角色管理',
        route: '/list/1'
      }
    ]
  },
  {
    label: '系统设置',
    icon: 'SettingOutlined',
    children: [
      {
        label: '我的信息',
        route: '/my-info'
      },
      {
        label: '修改密码',
        route: '/change-password'
      }
    ]
  },
  {
    label: '组件示例',
    icon: 'BlockOutlined',
    children: [
      {
        label: '自定义面包屑',
        route: '/components/customBreadcrumb'
      },
      {
        label: 'ProForm',
        route: '/components/pro-form'
      }
    ]
  },
  {
    label: '测试页',
    icon: 'HomeOutlined',
    route: '/test'
  }
]; // 本地菜单数据
export interface MenuItem {
  key?: string;
  label: string;
  icon?: DynamicIconKeys;
  route?: string;
  children?: MenuItem[];
}
