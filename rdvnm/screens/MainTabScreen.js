import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{ backgroundColor: '#694fad' }}

  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#9381C1',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={23} />
        ),
      }}
    />
    <Tab.Screen
      name="User"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'User',
        tabBarIcon: ({ color }) => (
          <Icon name="id-card-alt" color={color} size={23} />
        ),
      }}
    />

  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#8C73CE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Home',
    }} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#8C73CE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    }
  }}>
    <DetailsStack.Screen name="User" component={DetailsScreen} options={{
    }} />
  </DetailsStack.Navigator>
);
