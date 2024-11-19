import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bienvenida' }} />
        <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Para ti' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
