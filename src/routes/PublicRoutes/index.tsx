import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import LandingPage from '@screens/LandingPage';
import Login from '@screens/Login';
import Signin from '@screens/SignIn';
import React from 'react';

export type RootStackParamlist = {
  Login: undefined;
  Home: undefined;
  Signin: undefined;
  LandingPage: undefined;
};
const Nav = createNativeStackNavigator<RootStackParamlist>();

const PublicRoutes = () => {
  return (
    <Nav.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Nav.Screen name="Home" component={Home} />
      <Nav.Screen name="LandingPage" component={LandingPage} />
      <Nav.Screen name="Login" component={Login} />
      <Nav.Screen name="Signin" component={Signin} />
    </Nav.Navigator>
  );
};
export default PublicRoutes;
