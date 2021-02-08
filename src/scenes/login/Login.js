import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
} from 'react-native';


export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                My Todos
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({

    container:{
        height: 150,
        paddingTop: 60,
        backgroundColor:    'coral'
    },

    title:{
        fontSize:   20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffff'
    }


})