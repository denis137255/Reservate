import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  // User profile data
  const userProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Frontend Developer',
    location: 'New York, USA',
  };

  return (
    <View style={styles.container}>
      {/* Profile title */}
      <Text style={styles.title}>Profile</Text>
      {/* Display user information */}
      <Text>Name: {userProfile.name}</Text>
      <Text>Email: {userProfile.email}</Text>
      <Text>Bio: {userProfile.bio}</Text>
      <Text>Location: {userProfile.location}</Text>
    </View>
  );
};

// Styles for the ProfileScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileScreen; // Export the ProfileScreen component
