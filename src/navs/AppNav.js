import React, { useRef, useEffect, useState } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import StatsScreen from '../screens/StatsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Header from '../comps/Header';
import Footer from '../comps/Footer/Footer';

const Stack = createNativeStackNavigator();

const getTitleFromRoute = (routeName) => {
  const routeTitleMap = {
    HomeScreen: 'Home',
    StatsScreen: 'Stats',
    SettingsScreen: 'Settings',
  };
  return routeTitleMap[routeName.name] || 'App';
};

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
        header: ({ navigation, route, options }) => {
          const title = getTitleFromRoute(route);
          return route.name !== 'GamePage' ? (
            <Header title={title} />
          ) : null;
        },
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'none',
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
