import React from 'react';
import { Button, Result, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

// export const ErrorBoundary: React.FC = () => {
//   return (
//     <Row
//       justify="center"
//       align="middle"
//       wrap={false}
//       style={{ height: '100vh' }}
//     >
//       <Col>
//         <Result
//           status="error"
//           title="程序发生错误，请反馈给服务提供商！"
//           subTitle="对不起，由此给您带来的不便，我们深表歉意！此错误已上报系统平台，我们马上抓紧修复。"
//           extra={[
//             <Button type="primary" key="connectionManager">
//               联系管理员
//             </Button>
//           ]}
//         />
//       </Col>
//     </Row>
//   );
// };

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  console.log('navigate: ', navigate);
  return (
    <Row
      justify="center"
      align="middle"
      wrap={false}
      style={{ height: '100vh' }}
    >
      <Col>
        <Result
          status="error"
          title="对不起，发生意外错误！"
          subTitle="由此给您带来的不便，我们深表歉意！此错误已自动上报平台，我们将立即处理。"
          extra={[
            <Button type="primary" key="connectionManager">
              联系管理员
            </Button>
          ]}
        />
      </Col>
    </Row>
  );
};
