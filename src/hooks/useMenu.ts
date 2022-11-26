import { useState, useEffect, useCallback } from 'react';
import { fetchUserMenu } from '@/api/User';
import * as config from '@/config';
import type { MenuItem } from '@/config';

/**
 * 自动添加菜单数据唯一key，如：menu-0 menu-1 menu-1-0 menu-1-1
 * @param data
 * @param prefix
 * @returns
 */
const addMenuKeys = (data: MenuItem[], prefix: string) => {
  const menu: MenuItem[] = [];
  data.forEach((item, index) => {
    const key = prefix + '-' + index;
    if (item.Children) {
      item.Children = addMenuKeys(item.Children, key);
    }
    menu.push({ ...item, key });
  });
  return menu;
};

/**
 * 获取菜单数据
 * @returns
 */
export function useMenuData() {
  const [menuData, setMenuData] = useState<ExpandRecursively<MenuItem[]>>(
    addMenuKeys(config.MenuData, 'menu')
  );
  useEffect(() => {
    (async () => {
      if (config.IsUseServerMenu) {
        const menu = await fetchUserMenu();
        setMenuData(addMenuKeys(menu, 'menu'));
      }
    })();
  }, []);

  return menuData;
}

/**
 * 菜单折叠逻辑
 * @param { MenuItem[] } menuData
 * @returns
 */
export function useOpenKeysState(menuData: MenuItem[]) {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  // 处理菜单openKeys改变
  const onOpenChange = useCallback<(keys: string[]) => void>(
    (keys) => {
      const rootSubmenuKeys = menuData
        .filter((item) => item.Children && item.Children.length > 0)
        .map((item) => item.key);

      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        const childKeys = keys.filter(
          (item) => latestOpenKey && item.indexOf(latestOpenKey) > -1
        );
        setOpenKeys(latestOpenKey ? [...childKeys, latestOpenKey] : []);
      }
    },
    [menuData, openKeys]
  );

  return { openKeys, onOpenChange };
}
