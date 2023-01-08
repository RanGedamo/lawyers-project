import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import SignUpSignInForm from "./pages/signUpSignInForm"



const Routing = () => {

    return (
        <div className="main" >
            <Routes>      
                <Route path="/" element={<Home /> } />
                <Route path="SignIn" element={<SignUpSignInForm/>} />
            </Routes>
        </div>
    )
}

export default Routing