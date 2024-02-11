import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
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
    height: 28,
    width: 28,
    resizeMode: 'contain',
  },
});

export default Header;
