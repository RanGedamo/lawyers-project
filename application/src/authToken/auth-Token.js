import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { GetAsyncStorage } from "../AsyncStorage/AsyncStorage-Get"


const jwtInterceptor = axios.create({
    baseURL:"http://localhost:3030/"
});

AsyncStorage.getItem("authorization").then(res=>{
    
    jwtInterceptor.defaults.headers.common['authorization'] = JSON.parse(res);
})

export default jwtInterceptor;     