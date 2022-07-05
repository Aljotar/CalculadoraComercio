import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { style } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const VacacionesScreen = () => {

  interface Fecha {
    año: string,
    mes: string,
    dia: string,
  }
  interface Vacaciones {
    vacaciones: number,
  }

  const [vacaciones, setVacaciones] = useState<Vacaciones>()

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

    const resultado = dateDifference(fechaMedicion, fechaIngreso);

    setVacaciones(resultado);



  }

  const VacacionesPorAntiguedad = () => {

    if (vacaciones < 5 && vacaciones > 0) {
      return <Text style={styles.cantVacaciones} >ESTE AÑO TIENES 14 DIAS DE VACACIONES</Text>

    } else if (vacaciones < 10 && vacaciones > 5) {
      return <Text style={styles.cantVacaciones} >ESTE AÑO TIENES 21 DIAS DE VACACIONES</Text>

    } else if (vacaciones < 20 && vacaciones > 10) {
      return <Text style={styles.cantVacaciones} >ESTE AÑO TIENES 28 DIAS DE VACACIONES</Text>

    } else ( vacaciones > 20)
    return <Text style={styles.cantVacaciones} >ESTE AÑO TIENES 35 DIAS DE VACACIONES</Text>
  }

  function dateDifference(date2: Date, date1: Date): number {
    const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_YEAR);
  }

  return (
    <ScrollView>
      <View style={style.banner}>
      </View>
      <View style={styles.container1}>
        <Text style={style.titleStyle}>SOBRE LAS VACACIONES</Text>
        <LottieView style={{ width: 180, alignSelf: 'center' }}
          source={require('../assets/lottie/questionanimation.json')}
          autoPlay
        />
        <Text style={styles.titleStyle}>PREGUNTAS FRECUENTES</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.questStyle}>CUALES SON LOS PLAZOS QUE EL TRABAJADOR GOZARÁ<Icon
          name="help-outline" size={20} color="#6E6AF9" /></Text>
        <Text style={styles.resStyle}><Icon
          name="bookmark-outline" size={14} color="#6E6AF9" /> 14 días corridos con una antigüedad hasta 5 años</Text>
        <Text style={styles.resStyle}><Icon
          name="bookmark-outline" size={14} color="#6E6AF9" /> 21 días corridos con una antigüedad entre 5 y 10 años</Text>
        <Text style={styles.resStyle}><Icon
          name="bookmark-outline" size={14} color="#6E6AF9" /> 28 días corridos con una antigüedad entre 10 y 20 años</Text>
        <Text style={styles.resStyle}><Icon
          name="bookmark-outline" size={14} color="#6E6AF9" /> 35 días corridos con una antigüedad mayor a 20 años</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.questStyle}>CUALES SON LOS REQUISITOS PARA SU GOCE<Icon
          name="help-outline" size={20} color="#6E6AF9" /></Text>
        <Text style={styles.resStyle}><Icon
          name="bookmark-outline" size={14} color="#6E6AF9" /> Haber trabajado durante la mitad de los días hábiles comprendidos en el año calendario</Text>
        <Text style={styles.resStyle}><Icon
          name="bookmark-outline" size={14} color="#6E6AF9" /> Los feriados trabajados se computan como hábiles</Text>
        <Text style={styles.resStyle}><Icon
          name="bookmark-outline" size={14} color="#6E6AF9" /> La licencia comenzará en día lunes o el siguiente hábil si aquél fuese feriado</Text>
      </View>
      <View>
        <Text style={{ color: '#6E6AF9', alignSelf: 'center', marginTop: 20, fontWeight: '700' }}>CUESTIONES IMPORTANTES <Icon
          name="hand-left-outline" size={20} color="#6E6AF9" /></Text>
        <Text style={styles.custStyle}><Icon
          name="remove-outline" size={14} color="#6E6AF9" /> Se computarán como trabajados, los días en que el trabajador no preste servicios por gozar de una licencia legal, o por estar afectado por una enfermedad inculpable o por infortunio en el trabajo</Text>
        <Text style={styles.custStyle}><Icon
          name="remove-outline" size={14} color="#6E6AF9" /> El empleador deberá conceder el goce de vacaciones de cada año dentro del período comprendido entre el 1. de octubre y el 30 de abril del año siguiente.</Text>
        <Text style={styles.custStyle}><Icon
          name="remove-outline" size={14} color="#6E6AF9" /> La fecha de iniciación de las vacaciones deberá ser comunicada por escrito, con una anticipación no menor de cuarenta y cinco (45) días al trabajador</Text>
        <Text style={styles.custStyle}><Icon
          name="remove-outline" size={14} color="#6E6AF9" /> Cuando las vacaciones no se otorguen en forma simultánea a todos los trabajadores, el empleador deberá proceder en forma tal para que a cada trabajador le corresponda el goce de éstas por lo menos en una temporada de verano cada tres períodos.</Text>
        <Text style={styles.custStyle}><Icon
          name="remove-outline" size={14} color="#6E6AF9" /> Cuando el trabajador no llegase a totalizar el tiempo mínimo( prestar servicios durante la mitad del año vigente) gozará de un período, en proporción de un (1) día de descanso por cada veinte (20) días de trabajo efectivo</Text>
        <Text style={styles.custStyle}><Icon
          name="remove-outline" size={14} color="#6E6AF9" /> Para determinar la extensión de las vacaciones atendiendo a la antigüedad en el empleo, se computará como tal aquélla que tendría el trabajador al 31 de diciembre del año que correspondan las mismas</Text>
      </View>

      <View style={styles.container3}>
        <Text style={{ fontSize: 16, fontWeight: '700', alignSelf: 'center', marginTop: 4 }}>CALCULAR VACACIONES DEL AÑO VIGENTE</Text>
        <Text style={{ fontSize: 14, fontWeight: '400', alignSelf: 'center' }}>COMPLETAR CON LA FECHA DE INGRESO AL EMPLEO</Text>
      </View>

      <View>
        {
          VacacionesPorAntiguedad()
        }
      </View>


      <TextInput
        style={styles.inputStyle}
        placeholder='Año'
        keyboardType='numeric'
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={text => setFecha({ ...fecha, año: text })}
        value={fecha.año}
        maxLength={4}
        placeholderTextColor={'#6E6AF9'}
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
        placeholderTextColor={'#6E6AF9'}
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
        placeholderTextColor={'#6E6AF9'}
      >
      </TextInput>
      <Button
        title="CONSULTAR"
        color="#6E6AF9"
        onPress={() => calcularAntiguedad()}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    opacity: 0.9,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.20,
    shadowRadius: 11.41,

    elevation: 10,
  },
  container1: {
    height: 230,
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#434343',
  },
  container2: {
    height: 190,
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.20,
    shadowRadius: 11.41,

    elevation: 10,
  },
  container3: {
    height: 50,
    backgroundColor: '#E3E3E3',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    alignSelf: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.20,
    shadowRadius: 11.41,

    elevation: 10,
  },
  questStyle: {
    fontSize: 14,
    fontWeight: '400',
    padding: 3,
    alignSelf: 'center',
    marginTop: 10
  },
  resStyle: {
    color: '#727BFE',
    marginTop: 4,
    paddingLeft: 15
  },
  custStyle: {
    color: '#596352',
    alignSelf: 'center',
    padding: 20,
    fontWeight: '600'
  },
  cantVacaciones: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    color: '#578DF2',
  }
})

