import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Routing from "./AppRoute/Routing";
import Navbar from "./component/Navbar/Navbar";
import Payment from "./component/Payment/Payment";
import { useSelector } from "react-redux";
import { FireBaseConfig } from "./FireBaseConfig/FireBaseConfig";

export default function App() {
 FireBaseConfig()
  const user=useSelector((state)=>state.userData)
  const facebook=useSelector((state)=>state.facebookSignIn)
  console.log(user)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Routing /> */}
        <Payment/>        
        <Footer />
      </BrowserRouter>
    </div>
  );
}
