import { useSelector } from 'react-redux';
import { selectLayoutMode } from '@/store/reducer/layoutSlice';
import { LocalSettingsDrawer } from './components/LocalSettings';
import { Layout } from 'antd';
import Header from './components/Header';
import Sider from './components/Sider';
import Content from './components/Content';
import Footer from './components/Footer';

export type LayoutModeType = 'sidemenu' | 'topmenu';

export default function DefaultLayout() {
  const layoutMode = useSelector(selectLayoutMode);
  return (
    <Layout hasSider={layoutMode === 'sidemenu'}>
      <Sider />
      <Layout className="site-layout">
        <Header />
        <Content />
        <Footer />
        <LocalSettingsDrawer />
      </Layout>
    </Layout>
  );
}
