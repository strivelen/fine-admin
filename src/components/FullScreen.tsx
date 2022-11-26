import React from 'react';
import { Tooltip } from 'antd';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { useFullscreen } from 'ahooks';
import HeaderButton from './HeaderButton';

export function FullScreenHeaderButton() {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(
    () => document.getElementsByTagName('body')[0]
  );
  return (
    <Tooltip
      placement="bottom"
      title={isFullscreen ? '退出全屏' : '进入全屏'}
      arrowPointAtCenter
    >
      <HeaderButton
        icon={React.createElement(
          !isFullscreen ? FullscreenOutlined : FullscreenExitOutlined
        )}
        onClick={toggleFullscreen}
      />
    </Tooltip>
  );
}
