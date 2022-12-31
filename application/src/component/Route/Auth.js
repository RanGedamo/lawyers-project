import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";
import Screen5 from "../screens/Screen5";
import StackLogin from "./Stack-Login.js/StackLogin";
import Tab from "./Tab/Tab";

function Auth({navigation}) {
    const Stack = createStackNavigator();
    return ( 
        <Stack.Navigator>
          <Stack.Screen
            name="Home" 
            component={Tab}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Screen3" component={Screen3} />
          <Stack.Screen name="Screen4" component={Screen4} />
          <Stack.Screen name="Screen5" component={Screen5} />
          <Stack.Screen name="LoginStack" component={StackLogin} /> 
        </Stack.Navigator>
    );
  }
  export default Auth;