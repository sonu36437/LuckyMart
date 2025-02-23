import { View, Text,Linking } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './src/screens/AuthStack';
import VerificationScreen from './src/screens/VerificationScreen';
import Home from './src/screens/Home';
import Screen from './src/screens/Screen';
import CategoryScreen from './src/screens/CategoryScreen';
import CartScreen from './src/screens/CartScreen';
import ProfileScreen from './src/screens/ProfileScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  const linking = {
    prefixes: ['luckymart://', 'https://luckymart'], 
    config: {
      screens: {
        Home: 'chat/:user', 
        Auth: 'auth',
        verification: 'verify',
      },
    },
  };

  return (
<NavigationContainer linking={linking}>
  <Stack.Navigator screenOptions={{headerShown:false}}
  initialRouteName='Auth'
  >

    <Stack.Screen name="Auth"component={AuthStack}/>  
    <Stack.Screen name="verification" component={VerificationScreen}/>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Search" component={Screen} options={{animation:'ios_from_right',}}/>
    <Stack.Screen name='CategoryScreen' component={CategoryScreen} options={{animation:'ios_from_right',}}/>
    <Stack.Screen name='cart' component={CartScreen} options={{animation:'fade_from_bottom',}}/>
    <Stack.Screen name='Profile' component={ProfileScreen} options={{animation:'ios_from_right',}}/>
  </Stack.Navigator>

</NavigationContainer>
  )
}