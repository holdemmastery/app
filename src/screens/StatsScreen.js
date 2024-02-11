import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext.js';

const StatsScreen = () => {
  const [userElo, setUserElo] = useState(null);
  const { userId } = useUser();

  console.log(userId);
  
  useEffect(() => {
    const fetchUserElo = async () => {
      try {
        const response = await fetch('http://128.61.91.151:3000/get-user-elo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        console.log(response);
        
        if (!response.ok) {
          throw new Error('Failed to fetch user ELO');
        }

        const data = await response.json();
        setUserElo(data.userElo);
      } catch (error) {
        console.error('Error fetching user ELO:', error);
      }
    };

    if (userId) {
      fetchUserElo(userId);
    }
  }, [userId]);

  return (
    <View style={styles.container}>
      <Text style={styles.eloText}>ELO: {userElo || 'Not available.'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  eloText: {
    fontSize: 20,
    fontFamily: 'FiraSans_400Regular',
    color: 'white',
    marginBottom: 20,
  }
});

export default StatsScreen;
