import IntroduceRow from './components/IntroduceRow';
import { fetchAnalysisChart } from '@/api/dashboard';

export default function Analysis() {
  const [chartData, setChartData] = useState<API.AnalysisChartResData>({});
  useEffect(() => {
    (async () => {
      const chartData = await fetchAnalysisChart();
      setChartData(chartData);
    })();
  }, []);
  return <IntroduceRow loading={false} visitData={chartData.visitData || []} />;
}
