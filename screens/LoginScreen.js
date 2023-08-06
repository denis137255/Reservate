import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation

// LoginScreen component
const LoginScreen = ({ onLogin }) => {
  const navigation = useNavigation(); // Initialize useNavigation for navigating to other screens

  // Function to handle login button press
  const handleLogin = () => {
    onLogin(); // Call the provided onLogin function from Navigation.js
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Reservate</Text>
        <Text style={styles.subtitle}>Something to do here</Text>
        <Button title="Log In" onPress={handleLogin} />
</View>
  );
};

// Styles for the LoginScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40, // Increase the font size for a big title
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
});

export default LoginScreen; // Export the LoginScreen component
