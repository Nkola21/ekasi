import React from 'react';
import { createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import DrawerNavigator from './DrawerNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: DrawerNavigator,
  // Drawer: DrawerNavigator
  // SideDrawer: DrawerNavigator
},
  {
    initialRouteName: 'Main',
  }));
