import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { style } from '../theme/appTheme'
import LottieView from 'lottie-react-native'

export const Escala = () => {
  return (
    <ScrollView>
      <View style={style.banner} >
      </View>
      <View style={{ alignSelf: 'center' }}>
        <Text style={{...style.titleStyle, marginTop: 15}}>REMUNERACIONES PARA EMPLEADOS</Text>
        <Text style={{...style.titleStyle, alignItems: 'center'}}>DE COMERCIO</Text>
        <LottieView style={{ width: 250, alignSelf: 'center' }}
          source={require('../assets/lottie/cash.json')}
          autoPlay

        />

      </View>
      <Image
        style={{ height: 400, width: 420, marginTop: 10, alignSelf: 'center' }}
        source={require('../assets/image/img1.jpeg')}
      />
      <Image
        style={{ height: 325, width: 400, marginTop: 10, alignSelf: 'center' }}
        source={require('../assets/image/img2.jpeg')}
      />
      <Image
        style={{ height: 325, width: 400, marginTop: 10, alignSelf: 'center' }}
        source={require('../assets/image/img3.jpeg')}
      />
      <Image
        style={{ height: 325, width: 400, marginTop: 10, alignSelf: 'center' }}
        source={require('../assets/image/img4.jpeg')}
      />
      <Image
        style={{ height: 325, width: 400, marginTop: 10, alignSelf: 'center' }}
        source={require('../assets/image/img5.jpeg')}
      />
      <Image
        style={{ height: 330, width: 400, marginTop: 10, alignSelf: 'center' }}
        source={require('../assets/image/img6.jpeg')}
      />
      <View style={style.banner} >
      </View>
    </ScrollView>
  )
}
