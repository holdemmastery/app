import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#002440', '#00000D']} style={styles.container}>
      <Image
        source={require('../../assets/centerpiece.png')}
        style={styles.centerpiece}
        resizeMode="contain"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  centerpiece: {
    width: '100%',
    height: undefined,
    aspectRatio: 1520/2080,
  }
});

export default HomeScreen;
