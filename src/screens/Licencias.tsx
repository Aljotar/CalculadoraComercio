import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { style } from '../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export const Licencias = () => {
    return (
        <ScrollView>
            <View style={style.banner} >
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Text style={style.titleStyle}>SOBRE LAS LICENCIAS</Text>
                <LottieView style={{ width: 240 }}
                    source={require('../assets/lottie/licence.json')}
                    autoPlay

                />

            </View>
            <Text style={{
                ...style.homeText, alignSelf: 'center'
            }}>Licencias especiales:</Text>
            <Text style={{
                ...style.homeText, alignSelf: 'center'
            }}>CONVENCION COLECTIVA DE TRABAJO Nº 130/75</Text>
            <View style={styles.container1}>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> 12 días de licencia corridos por casamiento, con  goce  total  de  sus  remuneraciones</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" />  1 día de permiso sin pérdida de remuneración por todo concepto para trámites prematrimoniales</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> 1 día de licencia por casamiento de hijos</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> 30 días por año, sin  goce  de  remuneraciones, licencia por enfermedad de cónyuge, padres o hijos que requiera necesariamente la  asistencia  personal  del  empleado</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> 4  días corridos  de  licencia  por  fallecimiento  de  padre,  hijos,  cónyuges  o  hermanos/as, Cuando estos fallecimientos ocurrieran a más de quinientos kilómetros, se otorgarán 2 días corridos más de licencia</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> 2  días  de licencia corridos, por fallecimiento de abuelos, padres o hermanos políticos o hijos del cónyuge</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> 2  días hábiles por nacimiento de hijos</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> Jornada completa  de  licencia  al  trabajador  cuando  éste  concurra  a  dar  sangre</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> 2 días corridos de licencia al empleado que deba mudarse de vivienda</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> l0  días  de licencia  como  máximo,  por  año,  para  los  estudiantes  secundarios,  a  efectos  de preparar  sus  materias  y  rendir  exámenes</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> 20  días  de licencia  como  máximo,  por  año,  para  los  estudiantes  universitarios  a  efectos  de preparar  sus  materias  y  rendir  exámenes,  pudiendo  solicitar  hasta  un  máximo  de  4 días  por  examen</Text>
                <Text style={{ marginTop: 10 }}><Icon
                    name="bookmark-outline" size={15} color="#6E6AF9" /> 2 días corridos de licencia al empleado que deba mudarse de vivienda</Text>
            </View>
            <View style={style.banner} >
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container1: {
        height: 695,
        width: 350,
        backgroundColor: '#F5F5F5',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        marginBottom: 10,
        marginTop: 10,
        padding: 5
    }
})





