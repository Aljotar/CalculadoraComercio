import React from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { ItemsHome } from '../components/ItemsHome';
import { styles } from '../theme/appTheme';


export const Principal = () => {
    return (
        <View>
            <View style={styles.animacionStyle}>
                <Text style={styles.homeText}>EMPELADO DE COMERCIO</Text>
                <Text style={{fontWeight:'600', marginTop: 5, color: '#9592FF'}}>¡Informacion relevante para trabajadores de comercio!</Text>
                <LottieView style={{ width: 250}}
                    source={require('../assets/lottie/workHome.json')}
                    autoPlay
                    
                />
            </View>
            <View style={styles.itemsStyle}>
                <ItemsHome />
            </View>
        </View>
    )
}
