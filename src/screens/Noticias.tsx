import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { style } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Noticias = () => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
        <View style={style.banner} >
        </View>
        <View style={{ alignSelf: 'center' }}>
            <LottieView style={{ width: 150 }}
                source={require('../assets/lottie/notification.json')}
                autoPlay

            />

        </View>
        <Text style={style.titleStyle}>NOTICIAS</Text>
        <View style={styles.container1}>
            <Text>
            <Icon
                    name="calendar-outline" size={15} color="#6E6AF9" />Creado: 03 Mayo 2022
            </Text>
            <Text style={{fontWeight:'bold', marginTop: 5}}>Se homologó y publicó el acuerdo entre FAECyS y las cámaras empresarias (CAC , CAME y UDECA)</Text>
            <Text style={styles.itemsStyle}>
            <Icon
                    name="checkmark-outline" size={15} color="#6E6AF9" />Regirá desde abril de 2022 hasta marzo de 2023
            </Text>
            <Text style={styles.itemsStyle}>
            <Icon
                    name="checkmark-outline" size={15} color="#6E6AF9" />El aumento total será del 59,5% sobre los salarios básicos de abril de 2022
            </Text>
            <Text style={styles.itemsStyle}>
            <Icon
                    name="checkmark-outline" size={15} color="#6E6AF9" />En siete tramos: 6% en abril, 6% en mayo, 6% en junio, 10% en agosto, 10% en septiembre, 11% en noviembre, 10,5% en enero de 2023
            </Text>
            <Text style={styles.itemsStyle}>
            <Icon
                    name="checkmark-outline" size={15} color="#6E6AF9" />Será no remunerativo y se incorporará al básico en abril de 2023
            </Text>
            <Text style={styles.itemsStyle}>
            <Icon
                    name="checkmark-outline" size={15} color="#6E6AF9" />Aportes/Contribuciones aplicables: <Text style={{fontWeight: '600'}}>aportes y contribuciones de la Obra Social de Empleados de Comercio y Actividades Civiles,
                    aportes sindicales (arts. 100 y 101 del CCT),
                    INACAP</Text>
            </Text>
            <Text style={styles.itemsStyle}>
            <Icon
                    name="checkmark-outline" size={15} color="#6E6AF9" />No tendrán impacto sobre los adicionales del CCT 130/75, a saber:
                    presentismo, antigüedad
            </Text>
            <Text style={styles.itemsStyle}>
            <Icon
                    name="checkmark-outline" size={15} color="#6E6AF9" />Tampoco computarán para el cálculo del sueldo anual complementario.
            </Text>
            <Text style={styles.itemsStyle}>
            <Icon
                    name="checkmark-outline" size={15} color="#6E6AF9" />Aporte patronal solidario, excepcional y extraordinario:
                    Valor: $ 600 mensuales por cada trabajador comprendido en el CCT 130/75 y con contrato vigente.
            </Text>
            <Text style={styles.itemsStyle}>
            <Icon
                    name="checkmark-outline" size={15} color="#6E6AF9" />Aporte Solidario a OSECAC: de $ 100 mensuales a cargo del empleado (desde abril 2022 hasta marzo 2023)
            </Text>
            <Text style={styles.itemsStyle}>
            <Icon
                    name="checkmark-outline" size={15} color="#6E6AF9" />Vigencia: desde el 01/04/2022 hasta el 31/03/2023
            </Text>
            
        </View>
        <View style={style.banner} >
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container1: {
        height: 580,
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
        padding: 10
    },
    itemsStyle: {
        marginTop: 5
    }
}) 
