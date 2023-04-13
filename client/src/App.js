import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Routing from "./AppRoute/Routing";
import Navbar from "./component/Navbar/Navbar";
import CategoryNavbar from "./component/Navbar/CategoryNavbar";

export default function App() {
  const current = window.location.pathname;
  const bool = current == '/'? true :false

  return (
    <div className="App">
      <BrowserRouter>
        <CategoryNavbar bool={bool}/>
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
