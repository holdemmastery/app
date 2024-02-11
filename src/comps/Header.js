import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity style={styles.profileButton}>
        <Image
          source={require('../../../assets/profile.png')} // Replace with your profile picture
          style={styles.profilePic}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileButton: {
    width: 46,
    height: 46,
    resizeMode: 'contain',
  },
  profilePic: {
    height: 46,
    resizeMode: 
    width: 40,
    height: 40,
  },
});

export default Header;
