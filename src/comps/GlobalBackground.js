import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // Ensure you've installed this package

const GlobalBackground = ({ children }) => (
  <LinearGradient
    colors={['#002440', '#00000D']}
    style={{ flex: 1 }}>
    {children}
  </LinearGradient>
);

export default GlobalBackground;
