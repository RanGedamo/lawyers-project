import { Route, Routes } from "react-router-dom"
import Payment from "./component/Payment/Payment"
import Home from "./pages/Home/Home"

const Routing = () => {

    return (
        <div className="main" >
            <Routes>      
                <Route path="/" element={<Home /> } />
                <Route path="payment" element={<Payment/>} />
            </Routes>
        </div>
    )
}

export default Routing