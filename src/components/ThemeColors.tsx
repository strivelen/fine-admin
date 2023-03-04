import React, { useEffect } from 'react';
import { ConfigProvider, Space } from 'antd';
import Icon from '@/components/Icons';
import { useAppSelector, useAppDispatch } from '@/hooks/useAppHooks';
import { selectThemeColor, setThemeColor } from '@/store/reducer/layoutSlice';
import { ThemeColors } from '@/config';

export function ThemeColorConfigProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const themeColor = useAppSelector(selectThemeColor);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeColor
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export function ThemeColorsSelect() {
  const dispatch = useAppDispatch();
  const themeColor = useAppSelector(selectThemeColor);
  return (
    <Space>
      {ThemeColors.map((color, index) => (
        <ColorBlockItem
          key={index}
          color={color}
          isActive={themeColor === color}
          onClick={() => {
            dispatch(setThemeColor(color));
          }}
        />
      ))}
    </Space>
  );
}

interface ColorBlockItemParams {
  color: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isActive?: boolean;
}

function ColorBlockItem({ color, isActive, onClick }: ColorBlockItemParams) {
  return (
    <div
      style={{
        cursor: 'pointer',
        borderRadius: 6,
        width: 26,
        height: 26,
        textAlign: 'center',
        marginRight: 0,
        lineHeight: '24px',
        overflow: 'hidden',
        backgroundColor: color
      }}
      color={color}
      onClick={onClick}
    >
      {isActive && <ColorItemActive />}
    </div>
  );
}

function ColorItemActive() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Icon
        type="CheckOutlined"
        style={{ color: '#fff', fontWeight: 'bold' }}
      />
    </div>
  );
}
