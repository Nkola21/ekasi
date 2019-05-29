import React from 'react';
import { Platform, Button, View, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { Container, Header, Body, Left, Content } from 'native-base'
import MainTabNavigator from './MainTabNavigator';
import ProfileTabNavigator from './ProfileTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';


const CustomDrawerNavigator = (props) => (
  <Container>
    <Header>
      <Body>
        <Left>
          <Image source={require('../assets/images/robot-dev.png')} style={{ height: 40, width: 40}} />
        </Left>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)


export default createDrawerNavigator({
  Home: {
    screen: MainTabNavigator
  },
  Profile: {
    screen: ProfileTabNavigator
  }
},{
  initialRoute: 'Home',
  drawerPosition: 'left',
  contentComponent: CustomDrawerNavigator,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
});

// export default createAppContainer(MyDrawerNavigator);