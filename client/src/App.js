import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Routing from "./AppRoute/Routing";
import Navbar from "./component/Navbar/Navbar";
import Cookies from "./component/pop/Cookies";
import TopLawyerCard from "./component/cards/TopLawyerCard";
import HomeLawyer from "./component/cards/HomeLawyer";
import LawyerPayment from "./component/cards/LawyerPayment";
import LawyerProfile from "./component/cards/LawyerProfile";
import PayPal from "./component/payPal/PayPal";
import { Payment } from "./AppRoute/pagesRoute";
import PopUpRole from "./component/pop/PopUpBtn";
import PaypalCheckoutButton from "./component/PaypalCheckoutButton/PaypalCheckoutButton";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Routing /> */}
        {/* <Cookies /> */}
        {/* <PopUpRole/> */}
        <PaypalCheckoutButton/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
