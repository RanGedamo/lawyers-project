import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header';
import PopUpRole from './component/PopUpRole/PopUpBtn';
import Routing from './Routing';
import Navbar from "./component/Navbar/Navbar"
import PayPal from './component/payPal/PayPal';
export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header /> */}
      <Navbar/>
      <PayPal/>
      {/* <Routing />
      <Footer /> */}
      </BrowserRouter>
    </div>
  );
};