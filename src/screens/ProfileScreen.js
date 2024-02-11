import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useUser } from '../context/UserContext';

const ProfileScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserId, userId, logOut } = useUser();
  
  const handleSubmit = async () => { try {
      const response = await fetch('http://128.61.91.151:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const json = await response.json();
      if (json.userId) {
        setUserId(json.userId);
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Login failed', error.message);
    }
  };

  if (userId) {
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>Currently logged in as {userId}</Text>
        <LinearGradient
          colors={['#B11B1B', '#CF2929']}
          style={styles.buttonGradient}
        >
        <TouchableOpacity onPress={logOut} style={styles.button}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </LinearGradient>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Log in below. If the account does not exist, one will be created for you.</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#cccccc"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#cccccc"
        secureTextEntry={true} // This hides the password
        value={password}
        onChangeText={setPassword}
      />
    
      <LinearGradient
        colors={['#277DAE', '#33A8DA']}
        style={styles.buttonGradient}
      >
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </LinearGradient>
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
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'white', // A border color that stands out against the background
    borderRadius: 5,
    padding: 10,
    color: 'white', // Text color
    fontFamily: 'FiraSans_400Regular', // Consistent font family
  },
  buttonGradient: {
    borderRadius: 5,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'FiraSans_500Medium',
    fontSize: 18,
  },
});

export default ProfileScreen;
