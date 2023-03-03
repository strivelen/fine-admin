import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { fetchLogin } from '@/services/api';
import { PURGE } from 'redux-persist';
import type { IRoute } from '@/router/routes';

export interface UserState {
  menuItems: IRoute[];
  userInfo: API.UserInfo;
  token: string | undefined;
  isLogin: boolean;
}

const initialState: UserState = {
  menuItems: [],
  userInfo: {},
  token: undefined,
  isLogin: false
};

export const login = createAsyncThunk(
  'user/fetchLogin',
  async (params: Expand<API.LoginParams>) => {
    const response = await fetchLogin(params);
    return response;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action: PayloadAction<API.UserInfo>) => {
      state.userInfo = action.payload;
    },
    setMenuItems: (state, action: PayloadAction<IRoute[]>) => {
      state.menuItems = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        const { UserInfo, SessionKey, MenuItems = [] } = action.payload;
        state.menuItems = MenuItems as IRoute[];
        state.userInfo = UserInfo;
        state.token = SessionKey;
        state.isLogin = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLogin = false;
      })
      .addCase(PURGE, (state) => {
        // 不能用这种赋值为一个新对象的方式更新state，因为state是一个Immutable对象。
        // state = {
        //   userInfo: {} as User,
        //   token: undefined,
        //   isLogin: false
        // };
        // 可以用这种方式更新
        state.menuItems = [];
        state.userInfo = {};
        state.token = undefined;
        state.isLogin = false;
      });
  }
});

export const { setToken, setUserInfo } = userSlice.actions;

export const selectToken = (state: RootState) => state.user.token;
export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectMenuItems = (state: RootState) => state.user.menuItems;

export default userSlice.reducer;
