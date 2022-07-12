import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




export const ItemsHome = () => {

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, flexDirection: 'row' }} >
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
                onPress={() => navigation.navigate('Escala')}
                style={style.item}
            >
                <View style={style.boxStyle}>
                    <Icon
                        name="cash-outline" size={30} color="#6E6AF9" />
                    <Text style={style.textStyle} >ESCALA</Text>
                </View>
            </TouchableOpacity>
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
        </View>
    )
}

const style = StyleSheet.create({
    item: {
        width: 80,
        marginTop: 150,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#FDFDFD',
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
        alignItems: 'center'
    }
})
