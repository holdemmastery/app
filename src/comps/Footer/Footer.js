import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PlayIcon from '../../../assets/play.svg';
import StatsIcon from '../../../assets/stats.svg';
import SpadeIcon from '../../../assets/spade.svg';
import SettingsIcon from '../../../assets/settings.svg';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerItem}>
        
        <Text style={styles.itemText}>Train</Text>
        
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
    paddingBottom: 60,
    backgroundColor: 'transparent', // Set your own background color
  },
  itemText: {
    color: 'white',
    fontSize: 18,
  }
});

export default Footer;
