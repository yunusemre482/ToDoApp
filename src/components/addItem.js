import React ,{useState} from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    Button,
    Text,
    TextInput
} from 'react-native';

export default function addItem( {submitHandler}){
    const [text,setText]=useState('');
        
    const textHandler=(val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput
                onChangeText={textHandler}
                placeholder="add item "
                style={styles.item}
                
            />
            <Button onPress={()=> submitHandler(text)} title='Add Item' color='coral' />
        </View>
    )


}

const styles = StyleSheet.create({
    item:{
        marginBottom:12,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }


})