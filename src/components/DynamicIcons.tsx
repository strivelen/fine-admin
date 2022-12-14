import {
  HomeOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined,
  BlockOutlined,
  LinkOutlined,
  LockOutlined,
  DashboardOutlined,
  FormOutlined,
  TableOutlined
} from '@ant-design/icons';

export type DynamicIconKeys = keyof typeof icons;

const icons = {
  HomeOutlined: <HomeOutlined />,
  SettingOutlined: <SettingOutlined />,
  UnorderedListOutlined: <UnorderedListOutlined />,
  UserOutlined: <UserOutlined />,
  BlockOutlined: <BlockOutlined />,
  LinkOutlined: <LinkOutlined />,
  LockOutlined: <LockOutlined />,
  DashboardOutlined: <DashboardOutlined />,
  FormOutlined: <FormOutlined />,
  TableOutlined: <TableOutlined />
};

export default function DynamicIcons({ icon }: { icon?: DynamicIconKeys }) {
  if (!icon || !icons[icon]) {
    return null;
  }
  return icons[icon];
}
