import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { VacacionesScreen } from '../screens/VacacionesScreen';
import { Licencias } from '../screens/Licencias';




export const ItemsHome = () => {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, flexDirection: 'row' }} >
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('VacacionesScreen')}
                    style={style.item}
                >
                    <View style={style.boxStyle}>
                        <Icon
                            name="airplane-outline" size={30} color="#6E6AF9" />
                        <Text style={style.textStyle} >VACACIONES</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.item}
                >
                    <View style={style.boxStyle}>
                        <Icon
                            name="calculator-outline" size={30} color="#6E6AF9" />
                        <Text style={style.textStyle} >CALCULADORA</Text>
                    </View>
                </TouchableOpacity>
            </View>



            <View>
                <TouchableOpacity
                    style={style.item}
                >
                    <View style={style.boxStyle}>
                        <Icon
                            name="reader-outline" size={30} color="#6E6AF9" />
                        <Text style={style.textStyle} >CONVENIO</Text>
                    </View>
                </TouchableOpacity>



                <TouchableOpacity
                    style={style.item}
                >
                    <View style={style.boxStyle}>
                        <Icon
                            name="cash-outline" size={30} color="#6E6AF9" />
                        <Text style={style.textStyle}>SALARIO</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Licencias')}
                    style={style.item}
                >
                    <View style={style.boxStyle}>
                        <Icon
                            name="body-outline" size={30} color="#6E6AF9" />
                            <Text style={style.textStyle}>LICENCIAS</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    style={style.item}
                >
                    <View style={style.boxStyle}>
                        <Icon
                            name="megaphone-outline" size={30} color="#6E6AF9" />
                            <Text style={style.textStyle}>FERIADOS</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const style = StyleSheet.create({
    item: {
        width: 80,
        height: 130,
        borderRadius: 10,
        backgroundColor: '#FDFDFD',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    textStyle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 10
    },
    boxStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
