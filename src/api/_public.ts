import axios from '@/utils/axios';

type EnumResponse = Array<{ Key: string; Value: string }>;

/**
 * 获取枚举数据通用方法
 * @param { string } url
 * @returns
 */
export const fetchEnums = function (url: string) {
  return axios.get<ExpandRecursively<EnumResponse>>(url);
};

interface PaginationParams {
  pageSize?: number;
  pageNumber?: number;
  isASC?: boolean;
  name?: string;
  [propName: string]: any;
}

interface PaginationListResponse<ListItem = any> {
  List: ListItem[];
  VirtualCount: number;
}

/**
 * 获取列表
 * @param { string } url
 * @param { object } params
 * @returns
 */
export const fetchList = function (url: string, params: PaginationParams) {
  return axios.post<any, ExpandRecursively<PaginationListResponse | any[]>>(
    url,
    params
  );
};
