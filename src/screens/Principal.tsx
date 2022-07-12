import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import LottieView from 'lottie-react-native';
import { ItemsHome } from '../components/ItemsHome';
import { style } from '../theme/appTheme';
import { GradientBackground } from '../components/GradientBackground';


export const Principal = () => {

    useEffect(() => {
        SplashScreen.hide();
    }, [])
    


    return (
        <GradientBackground>
            <View style={style.banner}>
            </View>
            <View style={style.animacionStyle}>
                <Text style={style.homeText}>EMPELADO DE COMERCIO</Text>
                <Text style={{ fontWeight: '600', marginTop: 5, color: '#727BFE' }}>¡Informacion relevante para trabajadores de comercio!</Text>
                <LottieView style={{ width: 250, marginTop: 30 }}
                    source={require('../assets/lottie/workHome.json')}
                    autoPlay

                />
            </View>
            <View style={style.itemsStyle}>
                <ItemsHome />
            </View>
        </GradientBackground>
    )
}
