import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Routing from "./AppRoute/Routing";
import Navbar from "./component/Navbar/Navbar";
import Cookies from "./component/pop/Cookies";
import PayPal from "./component/payPal/PayPal";
import PaypalCheckoutButton from "./component/PaypalCheckoutButton/PaypalCheckoutButton";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Cookies />
        <PaypalCheckoutButton/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
