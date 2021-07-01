import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

const App = () => {

  return (

    <NavigationContainer >

      <MainTabScreen />

    </NavigationContainer>


  );
}

export default App;
