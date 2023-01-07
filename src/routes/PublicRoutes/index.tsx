import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '@screens/Cadastro';
import Home from '@screens/Home';
import LandingPage from '@screens/LandingPage';
import Login from '@screens/Login';
import Perfil from '@screens/Perfil';
import React from 'react';

export type RootStackParamlist = {
  Login: undefined;
  Home: undefined;
  Cadastro: undefined;
  Perfil: undefined;
  LandingPage: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamlist>();

const PublicRoutes = () => {
  return (
    <Navigator initialRouteName="LandingPage">
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="Perfil" component={Perfil} />
      <Screen name="LandingPage" component={LandingPage} />
    </Navigator>
  );
};

export default PublicRoutes;
