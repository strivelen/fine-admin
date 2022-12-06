import { Card, Row, Col } from 'antd';
import { Pie, RadialBar, WordCloud } from '@ant-design/charts';
import type {
  PieConfig,
  RadialBarConfig,
  WordCloudConfig
} from '@ant-design/charts';

export default function BottomCards() {
  const configPie: PieConfig = {
    appendPadding: 10,
    data: [
      {
        type: '分类一',
        value: 27
      },
      {
        type: '分类二',
        value: 25
      },
      {
        type: '分类三',
        value: 18
      },
      {
        type: '分类四',
        value: 15
      },
      {
        type: '分类五',
        value: 10
      },
      {
        type: '其他',
        value: 5
      }
    ],
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center'
      }
    },
    interactions: [
      {
        type: 'element-active'
      }
    ]
  };
  const configRadialBar: RadialBarConfig = {
    data: [
      {
        name: 'X6',
        star: 297
      },
      {
        name: 'G',
        star: 506
      },
      {
        name: 'AVA',
        star: 805
      },
      {
        name: 'G2Plot',
        star: 1478
      },
      {
        name: 'L7',
        star: 2029
      },
      {
        name: 'G6',
        star: 7100
      },
      {
        name: 'F2',
        star: 7346
      },
      {
        name: 'G2',
        star: 10178
      }
    ],
    xField: 'name',
    yField: 'star',
    maxAngle: 270,
    // 最大旋转角度,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: (datum) => {
        return {
          name: 'star数',
          value: datum.star
        };
      }
    },
    colorField: 'star',
    color: ({ star }) => {
      if (star > 10000) {
        return '#36c361';
      } else if (star > 1000) {
        return '#2194ff';
      }

      return '#ff4d4f';
    }
  };
  return (
    <Row gutter={16} style={{ marginTop: 16 }}>
      <Col span={8}>
        <Card title="转化率">
          <Pie {...configPie} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="玉珏图">
          <RadialBar {...configRadialBar} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="词云图">
          <DemoWordCloud />
        </Card>
      </Col>
    </Row>
  );
}

const DemoWordCloud = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config: WordCloudConfig = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
      rotation: 0
    },
    // 返回值设置成一个 [0, 1) 区间内的值，
    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
    random: () => 0.5
  };

  return <WordCloud {...config} />;
};
