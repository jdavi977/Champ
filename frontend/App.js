import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';

// Dummy screens
function HomeScreen() {
  return (
    <View style={styles.icon}>
      <Text>Home</Text>
    </View>
  );
}

function Metrics() {
  return (
    <View style={styles.icon}>
      <Text>Metrics</Text>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={styles.icon}>
      <Text>Profile</Text>
    </View>
  );
}

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.iconContainer}>
      <Tab.Navigator style={styles.iconContainer}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Metrics" component={Metrics} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {

  },
  iconContainer: {
    backgroundColor: "black"
  }
})