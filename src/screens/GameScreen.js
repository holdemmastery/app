import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native'

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>GameScreen</Text>

      <div className="board-area">

      </div>

      <div className="footer">
        <div className="board-cards"
          data-hand="flow: horizontal; cards: AS, KS, QS, JS, 10S, 9H, 3H">
        </div>
        
        <button className="showNextCard"/>
      </div>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: flex,
    flexDirection: column,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {

  }
});

export default GameScreen;
