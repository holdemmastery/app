import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Group>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="StatsScreen" component={StatsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNav;
