import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react"
import { Text ,SafeAreaView} from "react-native"
import { GetAsyncStorage } from "../../AsyncStorage/AsyncStorage-Get"
import jwtInterceptor, { getToken } from "../../authToken/auth-Token";
import { coursesAPI } from "../../Services/courses";





const Screen1 = ()=>{
    const [data, setData] = useState()

    const courses = async()=>{
        try {
            const result = await jwtInterceptor.get('api/courses')
            return result.data.result 
        }
        catch (err) { console.log(err) };
    }
    useEffect(()=>{ 
  
        courses().then(res=>setData(res)) 

    },[]);  
    return(   
        <SafeAreaView>
            {  
                data?.map(item=>{
                    return (
                        <Text key={item._id} style={{fontSize:30,fontWeight:"500",textAlign:"center"}}>{item.course}</Text> 
                       )
                })
            }
             
            {/* <Text style={{fontSize:30,fontWeight:"500",textAlign:"center"}}>Screen1</Text> */}
        </SafeAreaView>
    )
}
export default Screen1