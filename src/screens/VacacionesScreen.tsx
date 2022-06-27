import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

interface Fecha {
  año: string,
  mes: string,
  dia: string,
}

export const VacacionesScreen = () => {

  const [fecha, setFecha] = useState<Fecha>({
    año: '',
    mes: '',
    dia: '',
  })

  const calcularAntiguedad = () => {

    const año = parseInt(fecha.año);
    const mes = parseInt(fecha.mes) - 1;
    const dia = parseInt(fecha.dia);

    const fechaIngreso = new Date(año, mes, dia);
    const añoActual = new Date().getUTCFullYear();
    const fechaMedicion = new Date(añoActual, 11, 31);

    const resultado = dateDifference(fechaMedicion, fechaIngreso)

    console.log(resultado)

  }

  function dateDifference(date2: Date, date1: Date): number {
    const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    return Math.ceil((utc2 - utc1) / _MS_PER_YEAR);
}

  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder='Año'
        keyboardType='numeric'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={text => setFecha({ ...fecha, año: text })}
        value={fecha.año}
        maxLength={4}
      >

      </TextInput>
      <TextInput
        style={styles.inputStyle}
        placeholder='Mes'
        keyboardType='numeric'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={text => setFecha({ ...fecha, mes: text })}
        value={fecha.mes}
        maxLength={2}
      >

      </TextInput>
      <TextInput
        style={styles.inputStyle}
        placeholder='Día'
        keyboardType='numeric'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={text => setFecha({ ...fecha, dia: text })}
        value={fecha.dia}
        maxLength={2}
      >
      </TextInput>

      <TouchableHighlight
        onPress={() => calcularAntiguedad()}
      >
        <Text>CONSULTAR</Text>
      </TouchableHighlight>

      <Text></Text>

    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
