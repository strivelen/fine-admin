import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/hooks/useAppHooks';
import { fetchIsTokenValid } from '@/services/api';
import { selectToken } from '@/store/reducer/userSlice';
import { useRequest } from 'ahooks';
import { Spin, Row, Col } from 'antd';

/**
 * 路由守卫
 * @description 验证用户token是否在有效期。
 */
// eslint-disable-next-line no-undef
export default function AuthRoute({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const token = useAppSelector(selectToken);
  const { data: tokenIsValid, loading } = useRequest(fetchIsTokenValid, {
    refreshDeps: [location]
  });

  if (loading) {
    return <RouteAuthLoading />;
  }

  if (!token || !tokenIsValid) {
    return <Navigate to="/login" state={location} replace />;
  }

  return children;
}

function RouteAuthLoading() {
  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col>
        <Spin tip="用户认证中..." />
      </Col>
    </Row>
  );
}
