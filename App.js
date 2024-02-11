import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navs/AppNav';
import { StatusBar } from 'expo-status-bar';
import { useFonts, FiraSans_400Regular, FiraSans_500Medium, FiraSans_800ExtraBold } from '@expo-google-fonts/fira-sans';
import GlobalBackground from './src/comps/GlobalBackground';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    FiraSans_400Regular,
    FiraSans_500Medium,
    FiraSans_800ExtraBold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // The fontsLoaded boolean is sufficient for proceeding.
        // No need for an additional promise here.
      } catch (e) {
        console.warn(e);
      } finally {
        // Directly proceed if fonts are loaded.
        if (fontsLoaded) {
          setAppIsReady(true);
          await SplashScreen.hideAsync(); // Ensure splash screen is hidden here
        }
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null; // Keep this until everything is ready
  }
  
  return (
    <View style={{ flex: 1}}>
      <GlobalBackground>
        <NavigationContainer>
          <StatusBar style="light" />
          <AppNavigator />
        </NavigationContainer>
      </GlobalBackground>
    </View>
  );
};

export default App;
