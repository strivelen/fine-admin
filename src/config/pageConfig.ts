export type LayoutType = 'default' | false;

export interface PageConfig {
  title: string;
  layout?: LayoutType;
  auth?: boolean;
  menuKey?: string;
  // wrappers?: Array<any>;
}

export const defaultPageConfig: Omit<PageConfig, 'title'> = {
  layout: 'default',
  auth: true
};

export const pageConfig: { [propName: string]: PageConfig } = {
  '/': { title: 'Dashboard' },
  '/dashboard': { title: 'Dashboard' },
  '/login': { title: '登录', layout: false, auth: false },
  '/form/basic-form': { title: '基础表单' },
  '/form/step-form': { title: '分布表单' },
  '/list/search': { title: '搜索列表' },
  '/list/table-list': { title: '查询列表' },
  '/profile/basic': { title: '基础详情页' },
  '/profile/advanced': { title: '高级详情页' },
  '/result/success': { title: '成功页' },
  '/result/fail': { title: '失败页' },
  '/settings/my-info': { title: '我的信息' },
  '/settings/change-password': { title: '修改密码' },
  '/test': { title: '测试页面' }
};
