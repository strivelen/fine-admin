import axios from '@/utils/axios';
import type { MenuItem } from '@/config';

export interface UserInfo {
  Name?: string;
  Email?: string;
  Phone?: string;
  Address?: string;
}

interface LoginResponse {
  SessionKey: string;
  UserInfo: UserInfo;
}

export interface LoginParams {
  username: string;
  password: string;
}

/**
 * 登录
 */
export const fetchLogin = async (params: Expand<LoginParams>) => {
  const res = await axios.post<any, ExpandRecursively<LoginResponse>>(
    '/User/Login',
    params
  );
  return res;
};

/**
 * 验证用户登录态是否过期
 * @returns
 */
export const fetchIsTokenValid = async () => axios.get<boolean>('/User/Auth');

/**
 * 获取用户菜单
 */
export const fetchUserMenu = async () => {
  const res = await axios.get<ExpandRecursively<MenuItem[]>>('/User/PageList');
  return res;
};
