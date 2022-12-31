import Ionicons from 'react-native-vector-icons/Ionicons'
// import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import Home from "../../screens/Home/Home";
// import Chart from "../../screens/Chart/Chart";
// import Post from "../../screens/Post/Post";
// import Profile from "../../screens/Profile/Profile";
// import Settings from "../../screens/Settings/Settings";
// import Login from '../../screens/Login/Login';
// import Register from '../../screens/Register/Register';
// import EmailPhoneValid from '../../screens/validation/EmailPhone';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MyStack from '../../../routers/AuthStack';
import Screen1 from '../../screens/Screen1';
import Screen2 from '../../screens/Screen2';
import Screen3 from '../../screens/Screen3';
import Screen4 from '../../screens/Screen4';
import AsyncStorage from '@react-native-async-storage/async-storage';

const homeName = "Home";
const postName = "Post";
const profileName = "Profile";
const detailsName = "Details";
const loginName = "Login";
const registerName = "Register";

const Tab = ({navigate}) => {
  AsyncStorage.getItem("authorization").then(res=>{
    if(!JSON.parse(res)){

    }
    
  })
    const Tab = createBottomTabNavigator()
    return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === postName) {
              iconName = focused ? 'add' : 'add-circle-outline';

            } 
            else if (rn === registerName) {
              iconName = focused ? 'person' : 'person-outline'; 

            }else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline'; 

            } 
            else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === loginName) {
              iconName = focused ? 'person' : 'person-outline'; 
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={Screen1} />
        <Tab.Screen name={profileName} component={Screen2} />
        <Tab.Screen name={postName} component={Screen4} />
        {/* <Tab.Screen name={detailsName} component={DetailsScreen} /> */}
        {/* <Tab.Screen name={loginName} component={Login} />
        <Tab.Screen name={registerName} component={Register} /> */}


      </Tab.Navigator>

    )
}
export default Tab
