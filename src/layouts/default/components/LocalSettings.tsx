import { useState } from 'react';
import { Tooltip, Drawer, Row, Col, Divider, Button } from 'antd';
import Icon from '@/components/Icons';
import type { DrawerProps, ButtonProps } from 'antd';
import { DarkModeSwitch } from '@/components/DarkModeSwitch';
import { ThemeColorsSelect } from '@/components/ThemeColors';
import LayoutToggle from './LayoutToggle';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsOpenSetting,
  setIsOpenSetting
} from '@/store/reducer/layoutSlice';

export default function LocalSettingsBtn() {
  const dispatch = useDispatch();
  return (
    <Tooltip placement="bottomRight" title="本地设置" arrow>
      <Button
        type="text"
        icon={<Icon type="SettingOutlined" />}
        onClick={() => dispatch(setIsOpenSetting(true))}
      />
    </Tooltip>
  );
}

export function LocalSettingsDrawer(props: DrawerProps) {
  const isOpenSetting = useSelector(selectIsOpenSetting);
  const dispatch = useDispatch();
  return (
    <Drawer
      title="系统本地设置"
      placement="right"
      open={isOpenSetting}
      onClose={() => dispatch(setIsOpenSetting(false))}
    >
      <Row align="top" justify="center">
        <Col span={24}>
          <Divider>整体风格</Divider>
        </Col>
        <Col>
          <DarkModeSwitch />
        </Col>
        <Col span={24}>
          <Divider>导航模式</Divider>
        </Col>
        <Col>
          <LayoutToggle />
        </Col>
        <Col span={24}>
          <Divider>主题色</Divider>
        </Col>
        <Col>
          <ThemeColorsSelect />
        </Col>
      </Row>
    </Drawer>
  );
}
