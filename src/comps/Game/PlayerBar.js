import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PlayerBar = ({ name, elo, bb, position}) => {
  return (
    <View style={styles.mainBar}>
      <Image
          source={require('../../../assets/userpfp.png')}
          style={styles.profilePic}
      />
    
      <View style={styles.vertProfile}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.horiz}>
          <Image
            source={require('../../../assets/finland.png')}
            style={styles.logoCountry}
          />
          <Text style={styles.elo}>{elo}</Text>
        </View>
      </View>

      <View style={styles.holeCards}>
        <Image
          source={require('../../../assets/cards/As.png')}
          style={styles.card}
        /> 
        <Image
          source={require('../../../assets/cards/Tc.png')}
          style={styles.card}
        /> 
      </View>

      <View style={styles.vertProfile}>
        <View style={styles.horiz}>
          <Image
            source={require('../../../assets/chip.png')}
            style={styles.chip}
          />
          <Text style={styles.bb}>{bb}</Text>
        </View>
        <Text style={styles.elo}>{position}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBar: {
    flexDirection: 'row-reverse',
    width: '100%',
  },
  profilePic: {
    height: 64,
    width: 64,
    resizeMode: 'contain',
    borderRadius: 6,
    marginLeft: 12,
  },
  logoCountry: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
    marginRight: 6,
  },
  elo: {
    fontFamily: 'FiraSans_400Regular',
    color: 'white',
    fontSize: 22,   
  },
  vertProfile: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  nameText: {
    fontFamily: 'FiraSans_500Medium',
    color: 'white',
    fontSize: 22,
  },
  horiz: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  holeCards: {
    flexDirection: 'row',
    marginRight: 16,
    marginLeft: 12,
  },
  card: {
    height: 64,
    width: undefined,
    aspectRatio: 254/354,
    resizeMode: 'contain',
    marginLeft: 2,
  },
  chip: {
    height: 23,
    width: 23,
    resizeMode: 'contain',
    marginRight: 4,
  },
  bb: {
    fontFamily: 'FiraSans_500Medium',
    color: 'white',
    fontSize: 22,
  },
});

export default PlayerBar;
