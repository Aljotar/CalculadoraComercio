import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { VacacionesScreen } from '../screens/VacacionesScreen';
import { Principal } from '../screens/Principal';


export type RootStackParams = {
    VacacionesScreen: undefined,
    Principal: undefined
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
    </Stack.Navigator>
  );
}