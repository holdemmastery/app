import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>
        Welcome to Hold'em Mastery!
      </Text>
      <Text style={styles.otherText}>
        We're glad to guide you on your journey to becoming a more profitable poker player.
      </Text>
      <Text style={styles.otherText}>
        As you play through hands in the Play tab, our algorithms will pick up on exploitable leaks in your play.
        Artificial intelligence models will read your data and help you build heuristics to improve your play.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  topText: {
    fontSize: 26,
    fontFamily: 'FiraSans_500Medium',
    color: 'white',
    marginBottom: 10,
  },
  otherText: {
    fontSize: 22,
    fontFamily: 'FiraSans_400Regular',
    color: 'white',
    marginBottom: 10,
  },

});

export default HomeScreen;
