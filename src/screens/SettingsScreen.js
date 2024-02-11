import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>SettingsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topText: {
    fontSize: 20,
    fontFamily: 'FiraSans_400Regular',
    color: 'white',
    marginBottom: 20,
  },
});

export default SettingsScreen;
