import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Ensure you've installed this package

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerItem}>
        <Image
          source={require('../../../assets/play.png')}
          style={styles.circle}
        />
        <Text style={styles.itemText}>Train</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Image
          source={require('../../../assets/stats.png')}
          style={styles.circle}
        />
        <Text style={styles.itemText}>Stats</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.footerItem}>
        <Image
          source={require('../../../assets/spade.png')}
          style={styles.circle}
        />
        <Text style={styles.itemText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem}>
        <Image
          source={require('../../../assets/settings.png')}
          style={styles.circle}
        />
        <Text style={styles.itemText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 10,
    padding: 20,
    paddingBottom: 60,
    backgroundColor: 'transparent', // Set your own background color
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 52,
    height: 52,
    marginBottom: 6,
    resizeMode: 'contain',
  },
  itemText: {
    color: 'white',
    fontFamily: 'FiraSans_500Medium',
    fontSize: 18,
  }
});

export default Footer;
