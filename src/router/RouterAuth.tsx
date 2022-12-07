import { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/hooks/useAppHooks';
import { fetchIsTokenValid } from '@/api/User';
import { selectToken } from '@/store/reducer/userSlice';

/**
 * 路由守卫
 * @description 验证用户token是否在有效期。
 */
export default function RouterAuth() {
  const location = useLocation();
  const token = useAppSelector(selectToken);
  const [isTokenValid, setIsTokenValid] = useState(true);

  useEffect(() => {
    (async () => {
      const isTokenValid = await fetchIsTokenValid();
      setIsTokenValid(isTokenValid);
    })();
  }, [location]);

  if (!token || !isTokenValid) {
    return <Navigate to="/login" state={location} replace />;
  }
  return <Outlet />;
}
