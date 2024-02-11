import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navs/AppNav';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
