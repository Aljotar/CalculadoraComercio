import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { ItemsHome } from '../components/ItemsHome';
import { styles } from '../theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';
import { GradientBackground } from '../components/GradientBackground';


export const Principal = () => {
    return (
        <GradientBackground>
            <View style={styles.animacionStyle}>
                <Text style={styles.homeText}>EMPELADO DE COMERCIO</Text>
                <Text style={{ fontWeight: '600', marginTop: 5, color: '#F4F3FD' }}>¡Informacion relevante para trabajadores de comercio!</Text>
                <LottieView style={{ width: 250 }}
                    source={require('../assets/lottie/workHome.json')}
                    autoPlay

                />
            </View>
            <View style={styles.itemsStyle}>
                <ItemsHome />
            </View>
        </GradientBackground>
    )
}
