import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { GetAsyncStorage } from '../../AsyncStorage/AsyncStorage-Get';
import postUser from '../../Services/createUser';
import Register from './Register';

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 180, marginLeft: 50, marginRight: 50 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 1.5,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});

const CELL_COUNT = 5;


const ValidEmail = ({ navigation }) => {
    const [user, setUser] = useState()

    const [login, setLogin] = useState(false)
    const [value, setValue] = useState('');
    const [timeOut, setTimeOut] = useState(5);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const GetAsyncStorage = async () => {
        try {
            const value = await AsyncStorage.getItem("user");
            if (value !== null) {
                // We have data!!
                return JSON.parse(value)
            }
        } catch (error) {
            console.log(err)
        }
    }

    const handlerInputs = async () => {
        await GetAsyncStorage().then(res => setUser(res))
        const completeVerify = { ...user, emailValid: value }
        console.log(completeVerify.email);
        postUser(completeVerify).then(res=>{
            
            // console.log(res);
            if(res.message){
                alert(`Welcome ${completeVerify.email}.. and enjoy`)
                setTimeout(() => {
                    navigation.navigate("Login")
                }, 3000)
            }
        })
    };



    return (
        <SafeAreaView style={styles.root}>
            <Text style={{ fontSize: 50, marginTop: 50, textAlign: 'center', fontWeight: 'bold', color: "black" }}>Valid Register</Text>
            <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
            <View style={{ alignItems: "center", marginTop: 50 }}>
                <TouchableOpacity style={{ backgroundColor: "#250", padding: 20, borderRadius: 10, width: 120 }}>
                    <Text style={{ textAlign: "center", fontWeight: "700", color: "white" }} onPress={() => handlerInputs()}>Check</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text>{timeOut}</Text>
            </View>
        </SafeAreaView>
    );
};

export default ValidEmail;