import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Remember to install this package

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={styles.container}>
      <View style={styles.topNav}>
        <TouchableOpacity>
          <Image source={require('../../assets/burger.svg')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/profile.svg')} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/icon.png')} />
        <Text style={styles.logoText}>HOLD'EM MASTERY</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/play.svg')} />
          <Text>Train</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/stats.svg')} />
          <Text>Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/spade.svg')} />
          <Text>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../../assets/settings.svg')} />
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, // Set the width as needed
    height: 150, // Set the height as needed
    resizeMode: 'contain',
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  button: {
    alignItems: 'center',
  }
});

export default HomeScreen;
