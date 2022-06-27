import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Tabs } from './src/navigator/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
  )
}

export default App;

