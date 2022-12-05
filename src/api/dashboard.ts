import axios from '@/utils/axios';

/**
 * 分析页接口
 */
export const fetchAnalysisChart = () =>
  axios.get<API.AnalysisChartResData>('/AnalysisChart');
