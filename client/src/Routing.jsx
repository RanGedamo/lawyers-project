import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import SignUpSignInForm from "./pages/signUpSignInForm"



const Routing = () => {

    return (
        <div className="routing main" style={{position:"relative",zIndex:"3"}}>
            <Routes>      
                <Route path="/" element={<Home /> } />
                <Route path="SignIn" element={<signUpSignInForm />} />
            </Routes>
        </div>
    )
}

export default Routing