import { useMemo } from 'react';
import {
  useNavigate,
  useLocation,
  matchRoutes,
  Location
} from 'react-router-dom';
import last from 'lodash-es/last';
import { Menu } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import type { IRoute } from '@/router/routes';
import { routes } from '@/config';
import DynamicIcons, { DynamicIconKeys } from './DynamicIcons';
import { useSetState } from 'ahooks';
import type { SetState } from 'ahooks/es/useSetState';

interface State {
  openKeys: string[];
  selectKey: string;
}

export default function LayoutMenu() {
  const navigate = useNavigate();

  const menuData = useMemo(() => getMenuData(routes), []);

  const [state, setState] = useSetState<State>({
    openKeys: [],
    selectKey: ''
  });

  // 初始化菜单数据更新菜单状态
  useInitMenuState({
    menuData,
    setState
  });

  const onOpenChange = (keys: string[]) => {
    const rootKeys = menuData
      .filter((item) => item.children && item.children.length > 0)
      .map((item) => item.key);

    const latestOpenKey = keys.length > 0 ? keys[keys.length - 1] : undefined;

    if (latestOpenKey && rootKeys.includes(latestOpenKey)) {
      // 走到这里说明打开新的根菜单
      setState({ openKeys: [latestOpenKey] });
    } else {
      // 走到这里说明两种情况：
      // 1. onchange keys 是空的，直接赋值。
      // 2. 打开的是子菜单，也是直接赋值。
      setState({ openKeys: keys });
    }
  };

  return (
    <Menu
      id="custom-menu-popup"
      theme="dark"
      mode="inline"
      selectedKeys={[state.selectKey]}
      onClick={({ key, keyPath, domEvent }) => {
        setState({ selectKey: key });
        navigate('/' + key);
      }}
      openKeys={state.openKeys}
      onOpenChange={onOpenChange}
      items={generateMenuItems(menuData)}
    />
  );
}

/**
 * 获取菜单配置数据
 * @returns
 */
function getMenuData(routes: IRoute[]) {
  const menuData: IRoute[] = [];
  routes.forEach((route) => {
    const _route = { ...route };
    if (_route.menuRender !== false) {
      if (_route.children) {
        _route.children = getMenuData(_route.children);
      }
      menuData.push(_route);
    }
  });
  return menuData;
}

/**
 * 菜单配置数据生成Menu组件用数据
 * @param {MenuItem[]} data
 * @returns
 */
const generateMenuItems = (data: IRoute[]): ItemType[] => {
  const menu: ItemType[] = [];
  data.forEach((item) => {
    let children;
    if (item.children) {
      children = generateMenuItems(item.children);
    }
    menu.push({
      key: item.key,
      label: item.name,
      icon: <DynamicIcons icon={item.icon as DynamicIconKeys} />,
      children
    } as ItemType);
  });
  return menu;
};

// 处理菜单状态
const handleMenuState = (location: Location) => {
  const currentPageMatchRoutes = matchRoutes(routes, location);
  const selectRoute = last(currentPageMatchRoutes)?.route;

  let selectKey = selectRoute?.key;
  let openKeys = (currentPageMatchRoutes
    ?.map((item) => item.route.key)
    .slice(0, -1) || []) as string[];

  if (selectRoute?.menuRender === false) {
    selectKey = selectRoute?.parentKey;
    if (selectKey) {
      const parentMatchRoute = matchRoutes(routes, `/${selectKey}`);
      openKeys = (parentMatchRoute
        ?.map((item) => item.route.key)
        .slice(0, -1) || []) as string[];
    }
  }
  return { selectKey, openKeys };
};

// 路由改变或者菜单数据变更更新菜单状态
function useInitMenuState({
  menuData,
  setState
}: {
  menuData: IRoute[];
  setState: SetState<State>;
}) {
  const location = useLocation();

  useEffect(() => {
    // 设置菜单初始化状态
    if (menuData.length === 0) {
      return;
    }
    const { selectKey, openKeys } = handleMenuState(location);

    setState((prevState) => ({
      openKeys: openKeys.length > 0 ? openKeys : prevState.openKeys,
      selectKey: selectKey || ''
    }));
  }, [menuData]);
}
