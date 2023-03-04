import { Link } from 'react-router-dom';
import { Button, Space, Input, Select, DatePicker } from 'antd';
import Icon from '@/components/Icons';
// import Loading from '@/components/Loading';

export default function Home() {
  return (
    <>
      {/* <Loading /> */}
      <Space>
        <Link to="/login">到登录页</Link>
        <DatePicker
        // onChange={(date, dateString) => {
        //   console.log(date, dateString);
        // }}
        />
        {/* <UserOutlined /> */}
        <Icon.UserOutlined />
        <Icon.BlockOutlined />
        <Input placeholder="你好" />
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          options={[
            {
              value: 'jack',
              label: 'Jack'
            },
            {
              value: 'lucy',
              label: 'Lucy'
            },
            {
              value: 'disabled',
              disabled: true,
              label: 'Disabled'
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe'
            }
          ]}
        />
        {/* <Button type="primary" onClick={() => setPrefixCls("light")}>明亮</Button> */}
        <Button type="primary">按钮</Button>
      </Space>
      <div>
        <Button title="按钮" block icon={<Icon type="HomeOutlined" />}>
          按钮
        </Button>
      </div>
    </>
  );
}
