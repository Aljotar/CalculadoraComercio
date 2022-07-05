import React from 'react'
import { Image, Text, View } from 'react-native'

export const Escala = () => {
  return (
    <View>
      <Image
        style={{ height: 400, width: 410, marginTop: 10, alignSelf: 'center'}}
        source={ require('../assets/image/img1.jpeg') }
      />
    </View>
  )
}
