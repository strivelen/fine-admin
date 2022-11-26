import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Space } from 'antd';
import LayoutBreadcrumb from './Breadcrumb';
import PersonalCenter from './PersonalCenter';
import { useAppSelector, useAppDispatch } from '@/hooks/public';
import { selectIsDarkMode } from '@/store/reducer/layoutSlice';
import { setCollapsed } from '@/store/reducer/layoutSlice';
import LocalSettingsHeaderButton from './LocalSettings';
import { FullScreenHeaderButton } from './FullScreen';
import HeaderButton from './HeaderButton';
const { Header } = Layout;

export default function LayoutHeader() {
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const dispatch = useAppDispatch();
  const { collapsed } = useAppSelector((state) => state.layout);
  return (
    <Header
      style={{
        padding: '0 12px',
        backgroundColor: !isDarkMode ? '#fff' : undefined
      }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Space>
            <HeaderButton
              icon={React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  onClick: () => dispatch(setCollapsed(!collapsed))
                }
              )}
            />
            <LayoutBreadcrumb />
          </Space>
        </Col>
        <Col>
          <Space>
            <FullScreenHeaderButton />
            <PersonalCenter />
            <LocalSettingsHeaderButton />
          </Space>
        </Col>
      </Row>
    </Header>
  );
}
