import { useState } from 'react';
import { Tooltip, Drawer, Row, Col, Divider } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import type { DrawerProps, ButtonProps } from 'antd';
import { DarkModeSwitch } from './DarkModeSwitch';
import { ThemeColorsSelect } from './ThemeColors';
import HeaderButton from './HeaderButton';

export default function LocalSettingsHeaderButton() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <LocalSettingsBtn onClick={() => setOpen(true)} />
      <LocalSettingsDrawer open={isOpen} onClose={() => setOpen(false)} />
    </>
  );
}

function LocalSettingsBtn({ onClick }: ButtonProps) {
  return (
    <Tooltip placement="bottomRight" title="本地设置" arrowPointAtCenter>
      <HeaderButton
        icon={<SettingOutlined style={{ fontSize: 16 }} />}
        onClick={onClick}
      />
    </Tooltip>
  );
}

function LocalSettingsDrawer(props: DrawerProps) {
  return (
    <Drawer title="系统本地设置" placement="right" {...props}>
      <Row align="top" justify="center">
        <Col span={24}>
          <Divider>整体风格</Divider>
        </Col>
        <Col>
          <DarkModeSwitch />
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
