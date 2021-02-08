import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput
} from 'react-native';

export default function  Items({item , pressHandler}){
    return (
            <TouchableOpacity onPress={ () => pressHandler(item.key)}>
                <Text  style={styles.elem}> {item.text} </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    elem:{
        width: '80%',
        padding:16 ,
        marginTop:16,
        marginLeft:30,
        borderStyle: "dashed",
        borderRadius: 1,
        borderWidth: 3,
        borderColor: 'red',
        borderTopColor:'white'
    }


})