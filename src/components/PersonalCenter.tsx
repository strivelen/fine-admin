import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Row, Col, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { persistor } from '@/store';
import { selectUserInfo } from '@/store/reducer/userSlice';
import { useAppSelector } from '@/hooks/public';

const enum PersonalCenterMenuKeys {
  MyInfo = 'MYINFO',
  ModifyPassword = 'MODIFYPASSWORD',
  Logout = 'LOGOUT'
}

export default function PersonalCenterEntry() {
  const items: MenuProps['items'] = [
    { key: PersonalCenterMenuKeys.MyInfo, label: '我的信息' },
    { key: PersonalCenterMenuKeys.ModifyPassword, label: '修改密码' },
    { type: 'divider' },
    { key: PersonalCenterMenuKeys.Logout, danger: true, label: '退出登录' }
  ];
  const userInfo = useAppSelector(selectUserInfo);
  return (
    <Dropdown
      trigger={['hover']}
      menu={{
        items,
        style: { width: 100, textAlign: 'center' },
        onClick: (e) => {
          if (e.key === PersonalCenterMenuKeys.Logout) {
            persistor.purge(); // 清楚硬盘（如：localStorage）中的所有数据
          }
        }
      }}
    >
      <Row
        gutter={10}
        style={{
          cursor: 'pointer',
          marginTop: -2,
          userSelect: 'none',
          padding: '0 10px'
        }}
      >
        <Col>
          <Avatar size="default" icon={<UserOutlined />} />
        </Col>
        <Col>{userInfo.Name || 'Admin'}</Col>
      </Row>
    </Dropdown>
  );
}
