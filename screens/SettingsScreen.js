import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = ({ onLogout }) => {
  const navigation = useNavigation();

  // Function to handle the logout button press
  const handleLogout = () => {
    // Perform logout logic here
    // For now, we're calling the provided onLogout function to reset navigation
    onLogout();
  };

  // User settings data
  const userSettings = {
    notifications: true,
    darkMode: false,
    language: 'English',
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Settings</Text>
      
      {/* Notifications settings */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingItem}>Notifications:</Text>
        <Text style={styles.settingValue}>
          {userSettings.notifications ? 'Enabled' : 'Disabled'}
        </Text>
      </View>
      
      {/* Dark Mode settings */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingItem}>Dark Mode:</Text>
        <Text style={styles.settingValue}>
          {userSettings.darkMode ? 'Enabled' : 'Disabled'}
        </Text>
      </View>
      
      {/* Language settings */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingItem}>Language:</Text>
        <Text style={styles.settingValue}>{userSettings.language}</Text>
      </View>
      
      {/* Log Out button */}
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

// Styles for the SettingsScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Add overall padding to the container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingsContainer: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
    marginBottom: 10,
  },
  settingItem: {
    fontSize: 18,
    marginRight: 10, // Add margin to the right for spacing
  },
  settingValue: {
    fontSize: 18,
    color: 'gray', // Use gray color for the value text
  },
});

export default SettingsScreen;
