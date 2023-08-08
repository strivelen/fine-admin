import { Layout, theme, Menu } from 'antd';
import Logo from './Logo';
import useMenu from '../useMenu';

const { Sider } = Layout;
const { useToken } = theme;

export default function LayoutSider() {
  const layoutMode = useAppSelector(selectLayoutMode);
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const {
    token: { colorBgContainer }
  } = useToken();
  const { collapsed } = useAppSelector((state) => state.layout);
  const menu = useMenu();

  return layoutMode === 'sidemenu' ? (
    <Sider
      width={260}
      collapsedWidth={80}
      trigger={null}
      // collapsible
      collapsed={collapsed}
      style={{
        backgroundColor: !isDarkMode ? colorBgContainer : undefined,
        overflowY: 'auto',
        height: '100vh',
        position: 'sticky',
        top: 0
      }}
    >
      <Logo />
      <Menu
        mode="inline"
        theme={isDarkMode ? 'dark' : 'light'}
        items={menu.items}
        selectedKeys={[menu.selectKey || '']}
        onClick={({ key, keyPath, domEvent }) => menu.onSelectKey(key)}
        openKeys={menu.openKeys}
        onOpenChange={menu.onOpenKeys}
      />
    </Sider>
  ) : null;
}
