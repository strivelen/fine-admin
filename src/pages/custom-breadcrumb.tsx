import { useAppDispatch } from '@/hooks/useAppHooks';
import { setBreadcrumb } from '@/store/reducer/layoutSlice';
import { Button, Alert } from 'antd';

export default function CustomBreadcrumb() {
  const dispatch = useAppDispatch();
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <Alert
          closable
          message="提示"
          description={
            <div>
              源代码文件地址：
              <strong>/src/page/CustomBreadcrumb</strong>
            </div>
          }
          type="warning"
        />
      </div>
      <h1>自定义面包屑</h1>
      <Button
        type="primary"
        onClick={() => {
          dispatch(
            setBreadcrumb([
              '自定义1',
              { name: '自定义2', path: '/' },
              '自定义3'
            ])
          );
        }}
      >
        点击改变当前页面的面包屑
      </Button>
      <div style={{ margin: '30px 0' }}>
        <code>{`dispatch(setBreadcrumb(["自定义1", "自定义2"]))`}</code>
      </div>
    </>
  );
}
