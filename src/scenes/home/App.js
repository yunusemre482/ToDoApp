/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    View,
    Text,
    TextInput,
    StatusBar,
} from 'react-native';
import Header from '../login/Login';
import Item from '../../components/item';
import AddItem from '../../components/addItem';
export default function App(){
    const [todos, setTodos] = useState([
        {text:  'Ödevlerini Yap', key: '1'},
        {text:  'welcome to hacettepe' ,key:'2'},
        {text:  'su iççç', key: '3'}
    ]);

    const pressHandler =(key)=>{
        setTodos((precTodos) =>{
            return precTodos.filter(todo =>todo.key !== key)
        })
    }
    const submitHandler =(text)=>{
        setTodos((prevTodos) =>{
            return [
                {text: text ,key : Math.random().toString()},
                ...prevTodos
            ];
        })
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.subcontainer}>
                <AddItem submitHandler={submitHandler}/>
                <FlatList
                data={todos}
                renderItem={({item}) => (
                    <Item item={item} pressHandler={pressHandler}/>
                )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    subcontainer: {


    },
    item: {

    }


});

