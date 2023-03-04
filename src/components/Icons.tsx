import type { CSSProperties } from 'react';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import UnorderedListOutlined from '@ant-design/icons/UnorderedListOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import BlockOutlined from '@ant-design/icons/BlockOutlined';
import LinkOutlined from '@ant-design/icons/LinkOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import DashboardOutlined from '@ant-design/icons/DashboardOutlined';
import FormOutlined from '@ant-design/icons/FormOutlined';
import TableOutlined from '@ant-design/icons/TableOutlined';
import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
import DownOutlined from '@ant-design/icons/DownOutlined';
import EllipsisOutlined from '@ant-design/icons/EllipsisOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import DingdingOutlined from '@ant-design/icons/DingdingOutlined';

Icon.HomeOutlined = HomeOutlined;
Icon.SettingOutlined = SettingOutlined;
Icon.UnorderedListOutlined = UnorderedListOutlined;
Icon.UserOutlined = UserOutlined;
Icon.BlockOutlined = BlockOutlined;
Icon.LinkOutlined = LinkOutlined;
Icon.LockOutlined = LockOutlined;
Icon.DashboardOutlined = DashboardOutlined;
Icon.FormOutlined = FormOutlined;
Icon.TableOutlined = TableOutlined;
Icon.ProfileOutlined = ProfileOutlined;
Icon.DownOutlined = DownOutlined;
Icon.EllipsisOutlined = EllipsisOutlined;
Icon.InfoCircleOutlined = InfoCircleOutlined;
Icon.CloseCircleOutlined = CloseCircleOutlined;
Icon.RightOutlined = RightOutlined;
Icon.CheckCircleOutlined = CheckCircleOutlined;
Icon.DingdingOutlined = DingdingOutlined;

export type IconType = keyof typeof Icon;

interface IconProps {
  type: IconType;
  className?: string;
  style?: CSSProperties;
  rotate?: number;
  spin?: boolean;
  twoToneColor?: string; // (十六进制颜色)
}

export default function Icon({ type, ...iconProps }: IconProps) {
  const IcomComp = Icon[type];
  return <IcomComp {...iconProps} />;
}
