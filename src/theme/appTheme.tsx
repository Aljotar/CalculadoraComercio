import { StyleSheet } from 'react-native';



export const style = StyleSheet.create({
    banner: {
        height: 50,
        backgroundColor: '#727BFE',
        shadowColor: "#171717",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 13,
    },
    itemsStyle: {
        position: 'absolute',
        top: 370,
        alignItems: 'center',
        alignSelf: 'center'
    },
    animacionStyle: {
        alignItems: 'center',
        marginTop: 30

    },
    homeText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#313131',
    }
});