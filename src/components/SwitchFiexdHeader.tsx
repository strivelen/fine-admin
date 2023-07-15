import { setIsFixedHeader } from '@/store/reducer/layoutSlice';
import { Switch } from 'antd';

export default function SwitchFiexdWidth() {
  const dispatch = useAppDispatch();
  const isFixedHeader = useAppSelector(selectIsFixedHeader);

  return (
    <Switch
      defaultChecked={isFixedHeader}
      checked={isFixedHeader}
      onChange={(checked) => dispatch(setIsFixedHeader(checked))}
    />
  );
}
