import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import SetingScreen from '../screens/SettingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { BottomTabParamList, SettingsParamList, HomeParamList, TabTwoParamList } from '../types';
import { Icon } from '@ui-kitten/components';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName='Home' tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='ios-home' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='TabTwo'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='ios-code' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Settings'
        component={SettingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='ios-settings' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen name='TabTwoScreen' component={TabTwoScreen} options={{ headerTitle: 'Tab Two Title' }} />
    </TabTwoStack.Navigator>
  );
}

const SettingStack = createStackNavigator<SettingsParamList>();

function SettingNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name='SettingScreen' component={SetingScreen} options={{ headerTitle: 'Settings', headerShown: true }} />
    </SettingStack.Navigator>
  );
}
