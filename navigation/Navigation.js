import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabWrapper from '../navigation/BottomTabWrapper';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  // State to track whether the user is logged in or not
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle user login
  const handleLogin = () => {
    setLoggedIn(true); // Set loggedIn state to true when the user logs in
  };
  
  // Function to handle user logout
  const handleLogout = () => {
    setLoggedIn(false); // Set loggedIn state to false when the user logs out
  };

  return (
    <NavigationContainer>
      {/* Navigation stack */}
      <Stack.Navigator>
        {/* Check if the user is logged in */}
        {loggedIn ? (
          // If logged in, show the main app screen
          <Stack.Screen
            name="MainApp"
            options={{
              headerShown: false, // Hide the header
            }}
          >
            {props => <BottomTabWrapper {...props} onLogout={handleLogout} />} 
            {/* Pass the onLogout function to the BottomTabWrapper component */}
          </Stack.Screen>
        ) : (
          // If not logged in, show the login screen
          <Stack.Screen
            name="Login"
            options={{
              headerShown: false, // Hide the header
            }}
          >
            {props => <LoginScreen {...props} onLogin={handleLogin} />} 
            {/* Pass the onLogin function to the LoginScreen component */}
          </Stack.Screen>
        )}
        {/* Always show the Settings screen */}
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
