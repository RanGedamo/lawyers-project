import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Routing from "./AppRoute/Routing";
import Navbar from "./component/Navbar/Navbar";
import { useSelector } from "react-redux";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CategoryNavbar/>
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
