import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { VacacionesScreen } from '../screens/VacacionesScreen';
import { Principal } from '../screens/Principal';
import { Licencias } from '../screens/Licencias';
import { Escala } from '../screens/Escala';


export type RootStackParams = {
    VacacionesScreen: undefined,
    Principal: undefined,
    Licencias: undefined,
    Escala: undefined
}


const Stack = createStackNavigator<RootStackParams>();

export const StackPrincipal = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
        <Stack.Screen name="Principal" component={ Principal } />
        <Stack.Screen name="VacacionesScreen" component={ VacacionesScreen } />
        <Stack.Screen name="Licencias" component={ Licencias } />
        <Stack.Screen name="Escala" component={ Escala } />
    </Stack.Navigator>
  );
}