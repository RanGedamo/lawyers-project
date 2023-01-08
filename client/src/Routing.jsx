import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import SignUpFormUser from "./pages/signUpFormUser/SignUpFormUser"



const Routing = () => {

    return (
        <div className="main" >
            <Routes>      
                <Route path="/" element={<Home /> } />
                <Route path="SignIn" element={<SignUpFormUser/>} />
            </Routes>
        </div>
    )
}

export default Routing