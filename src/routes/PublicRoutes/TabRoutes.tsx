import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import React from 'react';

export type RootStackParamlist = {
  Home: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator<RootStackParamlist>();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
export default TabRoutes;
