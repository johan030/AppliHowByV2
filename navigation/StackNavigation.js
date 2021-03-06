import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
//screens 
import HomeScreen from '../screens/HomeScreen';
import DescriptionScreen from '../screens/DescriptionScreen';
import CameraScreen from '../screens/CameraScreen';




const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Group>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Group>
      </Stack.Navigator>

      
    </>
  )
}

export default StackNavigation