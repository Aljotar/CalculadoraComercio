import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calculadora } from '../screens/Calculadora';
import { Noticias } from '../screens/Noticias';
import { Convenio } from '../screens/Convenio';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
      <Tab.Navigator
          screenOptions={{
            headerShown: false
          }}>
        <Tab.Screen name="Calculadora" component={Calculadora} />
        <Tab.Screen name="Noticias" component={Noticias} />
        <Tab.Screen name="Convenio" component={Convenio} />
      </Tab.Navigator>
  );
}

