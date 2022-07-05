import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { ItemsHome } from '../components/ItemsHome';
import { style } from '../theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';
import { GradientBackground } from '../components/GradientBackground';


export const Principal = () => {
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
