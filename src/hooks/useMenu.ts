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
      const rootKeys = menuData
        .filter((item) => item.Children && item.Children.length > 0)
        .map((item) => item.key);

      const latestOpenKey = keys.length > 0 ? keys[keys.length - 1] : undefined;

      if (latestOpenKey && rootKeys.includes(latestOpenKey)) {
        // 走到这里说明打开新的根菜单
        setOpenKeys([latestOpenKey]);
      } else {
        // 走到这里说明两种情况：
        // 1. onchange keys 是空的，直接赋值。
        // 2. 打开的是子菜单，也是直接赋值。
        setOpenKeys(keys);
      }
    },
    [menuData, openKeys]
  );

  return { openKeys, setOpenKeys, onOpenChange };
}
