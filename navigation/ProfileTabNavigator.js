import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {  
    showLabel: false,
    showIcon: true
  }
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: { 
    showLabel: false,
    showIcon: true
  }
};

export default createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  SettingsStack,
},
{
  initialRouteName: 'SettingsStack'
});
