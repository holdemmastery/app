import React, { useRef, useEffect, useState } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Footer from '../comps/Footer/Footer.js';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  const [isGameScreen, setIsGameScreen] = useState(false);
  const navigationRef = useRef(null);

  useEffect(() => {
    const unsubscribe = navigationRef.current?.addListener('state', (e) => {
      const routeName = getFocusedRouteNameFromRoute(e.data.state) ?? 'Home';
      setIsGameScreen(routeName === 'Game');
    });

    return unsubscribe;
  }, []);
  
  return (
    <>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="StatsScreen" component={StatsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
      <Footer />
    </>
  );
};

export default AppNav;
