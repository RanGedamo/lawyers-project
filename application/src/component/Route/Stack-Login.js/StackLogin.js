import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import ValidEmail from "../../screens/ValidRegister";
import Auth from "../Auth";


function StackLogin() {
  const StackLogin = createStackNavigator();
  return (
    <StackLogin.Navigator>
      <StackLogin.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <StackLogin.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <StackLogin.Screen name="ValidEmail" component={ValidEmail} options={{ headerShown: false }} />
      <StackLogin.Screen name="Auth" component={Auth} options={{ headerShown: false }} />


    </StackLogin.Navigator>
  );
}
export default StackLogin