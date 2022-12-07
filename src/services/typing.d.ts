declare namespace API {
  type AnalysisChartData = {
    visitData?: any[];
    visitData2?: any[];
    salesData?: any[];
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    clickClose?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  interface UserInfo {
    Name?: string;
    Email?: string;
    Phone?: string;
    Address?: string;
  }

  interface LoginData {
    SessionKey: string;
    UserInfo: UserInfo;
  }

  interface LoginParams {
    username: string;
    password: string;
  }
}
