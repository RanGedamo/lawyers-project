import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, Keyboard, Button } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import logoStudent from '../../assets/images/logoStudent.png'
import AsyncStorage from "@react-native-async-storage/async-storage"

import { useEffect, useState } from "react"
import postUser from "../../Services/createUser"
import { GetAsyncStorage } from "../../AsyncStorage/AsyncStorage-Get"
import { SetAsyncStorage } from "../../AsyncStorage/AsyncStorage-Set"
// import EmailPhoneValid from "../validation/EmailPhone"

const Register = ({ navigation }) => {
    const [inputs, setInputs] = useState({})

    const handlerInputs = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }))
    };

    const submitUser = async () => {
        return await postUser(inputs).then(res => {
            console.log(res);
            if (res.firstName) {
                return alert(res.firstName)
            };
            if (res.lastName) {
                return alert(res.lastName)
            };
            if (res.email) {
                return alert(res.email)
            };
            if (res.password) {
                return alert(res.password);
            };
            if (res.passwordConfirm) {
                return alert(res.passwordConfirm)
            };
            if (res.phone) {
                return alert(res.phone)
            };
            if (res.emailValid) {
                alert("Verify the code you received for email")
             const setUser = async()=>{
              return await  SetAsyncStorage("user",inputs).then(res=>console.log(res))
               }
               setUser()
               setTimeout(() => {
                navigation.navigate('ValidEmail')
            }, 3000)
            }
        });
    };






    return (
        <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
            <View style={style.view1}>
                <View style={style.view2}>
                <Image source={{uri:"https://www.designfreelogoonline.com/wp-content/uploads/2021/07/1150-lawyer-03.png"}} style={style.logo} />
                </View>
                <Text style={style.text}>Sign-Up</Text>
                <View>
                </View>
                <View style={style.view3}>
                    <AntDesign name="user" size={20} color="#666" style={{ marginRight: 5 }} />
                    <TextInput placeholder="First Name" keyboardType='default' value={inputs.FirstName} onChangeText={(text) => handlerInputs(text, "firstName")} />
                </View>
                <View style={style.view3}>
                    <AntDesign name="user" size={20} color="#666" style={{ marginRight: 5 }} />
                    <TextInput placeholder="Last Name" keyboardType='default' value={inputs.LastName} onChangeText={(text) => handlerInputs(text, "lastName")} />
                </View>
                <View style={style.view3}>
                    <MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }} />
                    <TextInput placeholder="Email" error={true} keyboardType='email-address' value={inputs.Email} onChangeText={(text) => handlerInputs(text, "email")} />
                </View>
                <View style={style.view3}>
                    <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                    <TextInput placeholder="password" keyboardType='email-address' secureTextEntry={true} style={{ flex: 1, paddingVertical: 0 }} value={inputs.Password} onChangeText={(text) => handlerInputs(text, "password")} />
                </View>
                <View style={style.view3}>
                    <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 5 }} />
                    <TextInput placeholder="Confirm password" keyboardType='default' secureTextEntry={true} style={{ flex: 1, paddingVertical: 0 }} value={inputs.ConfirmPassword} onChangeText={(text) => handlerInputs(text, 'passwordConfirm')} />
                </View>
                <View style={style.view3}>
                    <AntDesign name="phone" size={20} color="#666" style={{ marginRight: 5 }} />
                    <TextInput placeholder="Phone Number" keyboardType='default' style={{ flex: 1, paddingVertical: 0 }} value={inputs.Phone} onChangeText={(text) => handlerInputs(text, 'phone')} />
                </View>
                <TouchableOpacity style={{ backgroundColor: "#AD40AF", padding: 20, borderRadius: 10, marginBottom: 30 }}>
                    <Text style={{ textAlign: "center", fontWeight: "700" }} onPress={() => submitUser()}>Sign-Up</Text>
                </TouchableOpacity>

                <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }} onPress={() => navigation.navigate('Login')}> or, Login Here</Text>
            </View>
        </SafeAreaView>
    )
}
export default Register

const style = StyleSheet.create({
    safeArray: {
        flex: 1,
        justifyContent: "center"
    },
    view1: {
        paddingHorizontal: 20,

    },
    view2: {
        alignItems: "center",
    },

    view3: {
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingBottom: 2,
        marginBottom: 20

    },
    input: {
        backgroundColor: "#ccc"
    },
    logo: {
        height: 290,
        width: 280,
        marginBottom:20,
        marginRight:8,
        marginTop:32,
        color: '#333',

    },
    text: {
        fontSize: 24,
        marginBottom: 20
    }
})