import { Button } from 'antd';
import type { ButtonProps } from 'antd';

export default function HeaderButton({ children, ...btnProps }: ButtonProps) {
  return (
    <Button
      shape="circle"
      style={{ border: 'none', backgroundColor: 'transparent', fontSize: 14 }}
      block
      {...btnProps}
    >
      {children}
    </Button>
  );
}
