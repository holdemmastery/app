import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/centerpiece.png')}
        style={styles.centerpiece}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  centerpiece: {
    width: '100%',
    height: undefined,
    aspectRatio: 1520/2080,
  }
});

export default HomeScreen;
