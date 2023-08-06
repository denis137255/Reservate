import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'; // Import Ionicons from react-native-vector-icons
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabWrapper = ({ onLogout }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Determine the appropriate icon name based on the route name and focus state
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // Render the Ionicons icon component with the determined icon name, size, and color
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Define tab screens */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile">
        {props => <ProfileScreen {...props} onLogout={onLogout} />}
      </Tab.Screen>
      <Tab.Screen name="Settings">
        {props => <SettingsScreen {...props} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabWrapper;
