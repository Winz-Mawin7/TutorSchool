import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type StackParamList = {
  Home: undefined;
  ProfileScreen: undefined;
};

// BOTTOM TAB PARAM LIST

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
  Settings: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type SettingsParamList = {
  SettingScreen: undefined;
};

// BOTTOM TAB NAVIGATION PROP

export type TabParamProps<T extends keyof BottomTabParamList> = {
  navigation: BottomTabNavigationProp<BottomTabParamList, T>;
};

// STACK NAVIGATON PROP
export type StackParamProps<T extends keyof StackParamList> = {
  navigation: StackNavigationProp<StackParamList, T>;
};
