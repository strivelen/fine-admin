import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutMenu from './Menu';
import LayoutHeader from './Header';
import Loading from './Loading';
import { useAppSelector } from '@/hooks/useAppHooks';
import Logo from './Logo';
import Footer from './Footer';
const { Sider, Content } = Layout;

export default function AdminLayout() {
  const { collapsed } = useAppSelector((state) => state.layout);
  return (
    <Layout hasSider>
      <Sider
        width={260}
        collapsedWidth={80}
        trigger={null}
        // collapsible
        collapsed={collapsed}
      >
        <div
          style={{
            overflowY: 'auto',
            height: '100vh',
            position: 'sticky',
            top: 0
          }}
        >
          <Logo />
          <LayoutMenu />
        </div>
      </Sider>
      <Layout className="site-layout">
        <LayoutHeader />
        <Content className="site-content">
          <Suspense fallback={<Loading height="100%" />}>
            <Outlet />
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
