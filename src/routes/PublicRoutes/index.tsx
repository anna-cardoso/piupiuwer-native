import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import React from 'react';

export type RootStackParamlist = {
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamlist>();

const PublicRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default PublicRoutes;
