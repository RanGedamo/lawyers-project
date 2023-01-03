import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import SignIn from "./pages/SignIn"



const Routing = ()=>{
    
    return(
        <div className="routing main">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="SignIn" element={<SignIn/>}/>
        </Routes>
        </div>
    )
}

export default Routing