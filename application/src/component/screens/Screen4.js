import { Text ,SafeAreaView} from "react-native"



const Screen4 = ({navigation})=>{
    
    return(
        <SafeAreaView>
            <Text style={{fontSize:30,fontWeight:"500",textAlign:"center"}}>Screen4</Text>
            <Text style={{fontSize:30,fontWeight:"500",textAlign:"center"}} onPress={()=>navigation.push("Screen5")}>Screen5</Text>
        </SafeAreaView>
    )
}
export default Screen4