import axios from './axios';
import type { MenuItem } from '@/config';

/**
 * 分析页接口
 */
export const fetchAnalysisChart = () =>
  axios.get<API.AnalysisChartData>('/AnalysisChart');

/**
 * 登录
 */
export const fetchLogin = async (params: Expand<API.LoginParams>) =>
  axios.post<any, ExpandRecursively<API.LoginData>>('/User/Login', params);

/**
 * 验证用户登录态是否过期
 * @returns
 */
export const fetchIsTokenValid = () => axios.get<boolean>('/User/Auth');

/**
 * 获取用户菜单
 */
export const fetchUserMenu = () =>
  axios.get<ExpandRecursively<MenuItem[]>>('/User/PageList');

/**
 * 获取用户信息
 */
export const fetchUserInfo = () => axios.get<API.UserInfo>('/User/Get');

/**
 * 获取文章列表
 * @param params
 * @returns
 */
export const fetchArticleList = (params: any) =>
  axios.post<any, API.ArticleList>('/Article/List', params);
