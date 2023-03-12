import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import * as React from 'react';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Home from './components/Home';
import Splash from './components/Splash';
import Onboard2 from './components/Onboard2';
import Onboard3 from './components/Onboard3';
import Login from './components/Login';
import Register from './components/Register';
import BottomNavigator from './views/BottomNavigator';
import News from './components/News';
import Details from './components/Details';
import Accounts from './components/Accounts';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Onboard2" component={Onboard2} options={{headerShown:false}}/>
      <Stack.Screen name="Onboard3" component={Onboard3} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
      <Stack.Screen name="HomeScreen" component={BottomNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
      <Stack.Screen name="News" component={News} options={{headerShown:false}}/>
      <Stack.Screen name="Accounts" component={Accounts} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
