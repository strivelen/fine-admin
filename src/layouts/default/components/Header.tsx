import React from 'react';
import { Menu, Row, Col, Space, Button } from 'antd';
import Logo from './Logo';
import HeaderActions from './HeaderActions';
import useMenu from '../useMenu';
import Breadcrumb from './Breadcrumb';
import Icon from '@/components/Icons';
import { setCollapsed } from '@/store/reducer/layoutSlice';
import HeaderContainer from './HeaderContainer';

export default function LayoutHeader() {
  const dispatch = useAppDispatch();
  const menu = useMenu();
  const layoutMode = useAppSelector(selectLayoutMode);
  const collapsed = useAppSelector(selectCollapsed);

  return (
    <HeaderContainer>
      <Row justify="space-between" align="middle">
        {layoutMode === 'topmenu' && (
          <Col flex={1} style={{ display: 'flex' }}>
            <Logo />
            <Menu
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none'
              }}
              mode="horizontal"
              theme="light"
              items={menu.items}
              selectedKeys={[menu.selectKey || '']}
              onClick={({ key, keyPath, domEvent }) => menu.onSelectKey(key)}
            />
          </Col>
        )}
        {layoutMode === 'sidemenu' && (
          <Col>
            <Space>
              <Button
                type="text"
                icon={React.createElement(
                  collapsed ? Icon.MenuUnfoldOutlined : Icon.MenuFoldOutlined
                )}
                onClick={() => dispatch(setCollapsed(!collapsed))}
              />
              <Breadcrumb />
            </Space>
          </Col>
        )}
        <Col>
          <HeaderActions />
        </Col>
      </Row>
    </HeaderContainer>
  );
}
