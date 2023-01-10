import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Routing from "./AppRoute/Routing";
import Navbar from "./component/Navbar/Navbar";
import Cookies from "./component/pop/Cookies";
import TopLawyerCard from "./component/cards/TopLawyerCard";
import HomeLawyer from "./component/cards/HomeLawyer";
import LawyerPayment from "./component/cards/LawyerPayment";
import PayPal from "./component/payPal/PayPal";
import PopUpRole from "./component/pop/PopUpBtn";
import { useSelector } from "react-redux";
import { FireBaseConfig } from "./FireBaseConfig/FireBaseConfig";
import { useEffect } from "react";
import PaypalCheckoutButton from "./component/PaypalCheckoutButton/PaypalCheckoutButton";

export default function App() {

 
 FireBaseConfig()

  const user=useSelector((state)=>state.userData)
  const facebook=useSelector((state)=>state.facebookSignIn)

  console.log(user)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Cookies />
        <PopUpRole/>
        <PaypalCheckoutButton/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
