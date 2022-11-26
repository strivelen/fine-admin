import { Button } from 'antd';
import type { ButtonProps } from 'antd';

export default function HeaderButton({ children, ...btnProps }: ButtonProps) {
  return (
    <Button
      shape="circle"
      style={{ border: 'none', backgroundColor: 'transparent', fontSize: 16 }}
      block
      {...btnProps}
    >
      {children}
    </Button>
  );
  // const isDarkMode = useAppSelector(selectIsDarkMode);

  // return (
  //   <div
  //     className={cla('site_header_item', { site_dark_header_item: isDarkMode })}
  //     onClick={onClick}
  //   >
  //     {children}
  //   </div>
  // );
}
