import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagesScreen from './screens/MessagesScreen';

// Dummy screens
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function Metrics() {
  return (
    <View>
      <Text>Metrics</Text>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}

function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen 
        name="Messages"
        component={MessagesScreen}
        options= {{
          headerShown: false
        }}
      />
    </MessagesStack.Navigator>
  )
}

// Create bottom tab navigator
const Tab = createBottomTabNavigator();
const MessagesStack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Metrics" component={Metrics} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Messages" component={MessagesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
