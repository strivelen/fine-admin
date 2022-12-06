import IntroduceRow from './components/IntroduceRow';
import { fetchAnalysisChart } from '@/api/dashboard';
import { useRequest } from 'ahooks';
import SalesCard from './components/SalesCard';
import BottomCards from './components/BottomCards';

export default function Analysis() {
  const { loading, data = {} } = useRequest(fetchAnalysisChart);

  return (
    <>
      <IntroduceRow loading={loading} visitData={data.visitData || []} />
      <SalesCard loading={loading} data={data?.salesData || []} />
      <BottomCards />
    </>
  );
}
