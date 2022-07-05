import  React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Noticias } from '../screens/Noticias';

import Icon from 'react-native-vector-icons/Ionicons';
import { StackPrincipal } from './StackPrincipal';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Principal':
              iconName = 'home-outline'
              break;

            case 'Calculadora':
              iconName = 'calculator-outline'
              break;

            case 'Noticias':
              iconName = 'newspaper-outline'
              break;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#726EFF',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {
            marginTop: 1
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          padding: 5
        },
        tabBarStyle: {
          height: 50,
          backgroundColor: '#EDEDED'
        },
        
      })}
    >


      <Tab.Screen name="Principal" component={ StackPrincipal } options={{
          tabBarLabel: "Principal"
      }}/>
      <Tab.Screen name="Noticias" component={ Noticias } />


    </Tab.Navigator>
  );
}
