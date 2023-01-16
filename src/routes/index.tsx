import PublicRoutes from './PublicRoutes';
import TabRoutes from './PublicRoutes/TabRoutes';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Routes = () => {
  return (
    <NavigationContainer independent={true}>
      <PublicRoutes />
      <TabRoutes />
    </NavigationContainer>
  );
};

export default Routes;
