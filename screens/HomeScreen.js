import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = () => {
  // Club data with details
  const clubs = [
    {
        id: 1,
        name: 'Club A',
        address: '123 Club St, City',
        rating: 4.5,
        workingHours: 'Mon-Sat: 8AM-11PM',
        icon: 'glass-cheers',
      },
      {
        id: 2,
        name: 'Club B',
        address: '456 Party Rd, Town',
        rating: 4.0,
        workingHours: 'Mon-Sun: 10AM-2AM',
        icon: 'beer',
      },
      {
        id: 3,
        name: 'Club C',
        address: '789 Dance Ave, Village',
        rating: 3.8,
        workingHours: 'Tue-Sat: 7PM-1AM',
        icon: 'music',
      },
      // Add more club objects as needed
      // ...
      {
        id: 20,
        name: 'Club T',
        address: '567 Nightlife Blvd, Metropolis',
        rating: 4.2,
        workingHours: 'Fri-Sat: 9PM-3AM',
        icon: 'glass-cheers',
      },
  ];

  // Function to render each club item
  const renderItem = ({ item }) => (
    <View style={styles.clubContainer}>
      {/* Club icon */}
      <FontAwesome5 name={item.icon} size={60} color="#333" style={styles.clubIcon} />
      {/* Club name */}
      <Text style={styles.clubName}>{item.name}</Text>
      {/* Club address */}
      <Text style={styles.clubAddress}>{item.address}</Text>
      {/* Club rating */}
      <Text style={styles.clubRating}>Rating: {item.rating}</Text>
      {/* Club working hours */}
      <Text style={styles.clubWorkingHours}>Working Hours: {item.workingHours}</Text>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      {/* Heading */}
      <Text style={styles.heading}>Home Screen</Text>
      <View style={styles.contentContainer}>
        {/* FlatList to render club items */}
        <FlatList
          data={clubs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  clubContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  clubIcon: {
    marginBottom: 10,
  },
  clubName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clubAddress: {
    fontSize: 16,
    marginBottom: 5,
  },
  clubRating: {
    fontSize: 16,
    marginBottom: 5,
  },
  clubWorkingHours: {
    fontSize: 16,
  },
});

export default HomeScreen; // Export the HomeScreen component
