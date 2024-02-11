import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity style={styles.profileButton}>
        <Image
          source={require('../../assets/profile.png')} // Replace with your profile picture
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
    marginTop: 45,
    padding: 20,
  },
  headerTitle: {
    fontSize: 44,
    color: 'white',
    fontFamily: 'FiraSans_800ExtraBold',
  },
  profileButton: {
  },
  profilePic: {
    height: 34,
    width: 34,
    resizeMode: 'contain',
  },
});

export default Header;
