import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CpuBar from '../comps/Game/CpuBar.js';
import Board from '../comps/Game/Board.js';
import PlayerBar from '../comps/Game/PlayerBar.js';


const GameScreen = () => {
  return (
    <View style={styles.container}>
      <CpuBar name={"Opp392"} elo={978} bb={62} position={"BTN"} />
      <Board />
      <PlayerBar name={"User281"} elo={1028} bb={73} position={"BB"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
});

export default GameScreen;
