import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '@/router/routes';
import Loading from '@/components/Loading';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

import { DarkModeConfigProvider } from '@/components/DarkModeSwitch';
import { ThemeColorConfigProvider } from '@/components/ThemeColors';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import '@/assets/iconfont/iconfont.css';
import 'antd/dist/reset.css';
import './App.css';

dayjs.locale('zh-cn');

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkModeConfigProvider>
          <ThemeColorConfigProvider>
            <ConfigProvider locale={zhCN} input={{ autoComplete: 'off' }}>
              <Suspense fallback={<Loading />}>
                <RouterProvider router={router} />
              </Suspense>
            </ConfigProvider>
          </ThemeColorConfigProvider>
        </DarkModeConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
