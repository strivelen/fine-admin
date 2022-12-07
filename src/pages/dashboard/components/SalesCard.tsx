import { Card, Tabs, Space, DatePicker } from 'antd';
import { Column } from '@ant-design/plots';
import '../style.css';
const { RangePicker } = DatePicker;

interface SalesCardProps {
  loading: boolean;
  data: any[];
}

const tabBarStyle = { marginBottom: 24, padding: '0 16px' };

function SalesCard({ loading, data }: SalesCardProps) {
  return (
    <Card
      loading={loading}
      bordered={false}
      bodyStyle={{ padding: 0 }}
      className="analysis_salesCard"
    >
      <Tabs
        size="large"
        tabBarStyle={tabBarStyle}
        tabBarExtraContent={<TabBarExtraContent />}
      >
        <Tabs.TabPane tab="销售额" key="sales">
          <Column
            height={300}
            autoFit
            data={data}
            xField="x"
            yField="y"
            xAxis={{
              title: {
                text: '当年月份'
              }
            }}
            yAxis={{
              title: {
                text: '销售量'
              }
            }}
            meta={{
              y: {
                alias: '销售量'
              }
            }}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="访问量" key="views">
          <Column
            height={300}
            autoFit
            data={data}
            xField="x"
            yField="y"
            xAxis={{
              label: {
                autoHide: true
              }
            }}
            meta={{
              y: {
                alias: '销售量'
              }
            }}
            tooltip={{
              title: '销售趋势'
            }}
          />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
}

function TabBarExtraContent() {
  return (
    <Space size="large">
      <a>今日</a>
      <a>本周</a>
      <a>本月</a>
      <a>本年</a>
      <RangePicker
        style={{ width: 256 }}
        onChange={(date, string) => {
          console.log(date, string);
        }}
      />
    </Space>
  );
}

export default SalesCard;
