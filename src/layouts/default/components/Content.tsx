import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Loading from '@/components/Loading';

const { Content } = Layout;

export default function LayoutContent() {
  return (
    <Content className="site-content">
      <Suspense fallback={<Loading height="100%" />}>
        <Outlet />
      </Suspense>
    </Content>
  );
}
