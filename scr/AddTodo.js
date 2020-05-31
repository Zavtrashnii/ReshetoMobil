import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert, Text } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    var [value1, setValue1]  = useState(value1);
    var n
    var ValueArray = "Простые числа: "

    const pressHandler = () => {
        if (value1 != 0) {
            n = value1;
            var array = [], limit = Math.sqrt(n), result = [];

            for (var i = 2; i < n; i++) {
                array.push(true);
            }

            for (var i = 2; i <= limit; i++) {
                if (array[i]) {
                    for (var j = i * i; j < n; j += i) {
                        array[j] = false;
                    }
            }
            }

            for (var i = 2; i < n; i++) {
            if(array[i]) {
                result.push(i);
                ValueArray += i + " ";
            }
            }

            Alert.alert(ValueArray);
            ValueArray = "Простые числа: ";
        }
        else if ( value1 == 0) {
            Alert.alert('Поле не должно быть пустым или = 0');
        }
    };

    return (
        <View>
            <View style = {styles.block}>
                <Text style = {styles.func}> N = </Text>
                <TextInput 
                    placeholder = '12'    
                    style = {styles.input}
                    keyboardType = 'numeric'  
                    onChangeText = {setValue1}                                      
                    value1 = {value1}
                    maxLength = {8}
                />
                <Text style = {styles.func}></Text>
            </View>
            <View style = {styles.buttons}>
                <Button color = '#5E4BD8' title = " Рассчитать " onPress = {pressHandler}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    func: {
        fontSize: 30
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '16%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        fontSize: 20,
        textAlign: 'center',
        borderBottomColor: '#5E4BD8'
    },
    buttons: {
      width: '100%',
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 15
    }
});