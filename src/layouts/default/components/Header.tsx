import type { ReactNode, CSSProperties } from 'react';
import { Layout, theme } from 'antd';
const { Header } = Layout;

export default function LayoutHeader({
  children,
  style = {}
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  const isFixedHeader = useAppSelector(selectIsFixedHeader);
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const headerStyle: CSSProperties = isFixedHeader
    ? { position: 'sticky', top: 0, zIndex: 100 }
    : {};
  return (
    <Header
      style={{
        padding: '0 16px',
        backgroundColor: colorBgContainer,
        ...headerStyle,
        ...style
      }}
    >
      {children}
    </Header>
  );
}
