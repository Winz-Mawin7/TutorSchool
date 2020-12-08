import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type StackParamList = {
  Home: undefined;
  Profile: undefined;
  History: undefined;
  HistoryDetail: {
    id: number;
  };
};

// BOTTOM TAB PARAM LIST
export type BottomTabParamList = {
  Home: undefined;
  History: undefined;
  Settings: undefined;
};

export type HomeParamList = {
  Home: undefined;
  Profile: undefined;
};

export type HistoryParamList = {
  History: undefined;
  HistoryDetail: {
    id: number;
  };
};

export type SettingsParamList = {
  Setting: undefined;
};

// BOTTOM TAB NAVIGATION PROP
export type TabParamProps<T extends keyof BottomTabParamList> = {
  navigation: BottomTabNavigationProp<BottomTabParamList, T>;
};

// STACK NAVIGATON PROP
export type StackParamProps<T extends keyof StackParamList> = {
  navigation: StackNavigationProp<StackParamList, T>;
  route: RouteProp<StackParamList, T>;
};
