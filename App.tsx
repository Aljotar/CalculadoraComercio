import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Tabs } from './src/navigator/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BannerAd, TestIds } from '@react-native-admob/admob';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <View>
          <BannerAd size={'FULL_BANNER'} unitId={TestIds.BANNER}/>
        </View>
        <Tabs />
        <View>
          <BannerAd size={'FULL_BANNER'} unitId={TestIds.BANNER}/>
        </View>
    </NavigationContainer>
  )
}

export default App;

