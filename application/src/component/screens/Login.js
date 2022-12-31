import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,Image } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import logoStudent from '../../assets/images/logoStudent.png'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { SetAsyncStorage } from "../../AsyncStorage/AsyncStorage-Set"
import {  useState } from "react";
import { login } from "../../Services/loginUser"
import Auth from "../Route/Auth"

const Login = ({navigation}) => {
    const [inputs, setInputs] = useState({});
    const [userToken, setUserToken] = useState("");

    const handlerInputs = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }))
    };
    
    const submitUser = async () => {
        return await login(inputs)
        .then(res => {
            // console.log(res);
            if (res.email) {
                return alert(res.email)
            };
            if (res.password) {
                return alert(res.password);
            };
                AsyncStorage.setItem("authorization",JSON.stringify(res?.token));
              
                setTimeout(() => {
                   return navigation.navigate("Auth")
            }, 3000)
            })
    };

    return (
        <SafeAreaView style={{backgroundColor:"white",height:"100%"}}>
            <View style={style.view1}>
                <View style={style.view2}>
                    <Image source={{uri:"https://www.designfreelogoonline.com/wp-content/uploads/2021/07/1150-lawyer-03.png"}} style={style.logo} />
                </View>
                <Text style={style.text}>Login</Text>
                <View>
                </View>
                <View style={style.view3}>
                    <MaterialIcons name="alternate-email" size={20} color="#666"  style={{marginRight:5}}  />
                    <TextInput placeholder="Email" keyboardType='email-address' value={inputs.email} onChangeText={(text) => handlerInputs(text, "email")}/>
                </View>
                <View style={style.view3}>
                    <Ionicons name="ios-lock-closed-outline" size={20} color="#666"  style={{marginRight:5}}/>
                    <TextInput placeholder="password" keyboardType='default' secureTextEntry={true} style={{flex:1,paddingVertical:0}}  value={inputs.password} onChangeText={(text) => handlerInputs(text, "password")}/>
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={{color:"#AD40AF",fontWeight:"700"}}>Forget?</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={{backgroundColor:"#AD40AF",padding:20,borderRadius:10,marginBottom:30}}>
                    <Text style={{textAlign:"center",fontWeight:"700"}} onPress={()=>submitUser()}>Login</Text>
                </TouchableOpacity>
                <Text style={{textAlign:"center",color:"#666",marginBottom:30}} onPress={()=>navigation.navigate('Register')}> or, Register Here</Text>
            </View>
        </SafeAreaView>
    )
}
export default Login

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
        paddingBottom: 8,
        marginBottom:20

    },
    input:{
        backgroundColor:"#ccc"
    },
    logo: {
        height: 380,
        width: 280,
        marginBottom:70,
        marginRight:8,
        marginTop:20,
        color: '#333',

    },
    text: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 30
    }
})