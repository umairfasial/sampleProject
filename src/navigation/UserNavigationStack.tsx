import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from '../screens/auth/signupScreen/SignupScreen';
import LoginScreen from '../screens/auth/loginScreen/LoginScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import SplashScreen from '../screens/auth/splashScreen/SplashScreen';

const UserNavigationStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default UserNavigationStack
