import { Route, Routes } from "react-router-dom"
import { Home, Filter, Payment, UserProfile, LawyerProfile, ErrorPage } from "./pagesRoute"

export default function Routing() {
    return (
        <div className="main" >
            <Routes>      
                <Route path="/" element={<Home /> } />
                <Route path="/categories" element={<Filter /> } />
                {/* {protected route here} */}
                <Route path="/user/profile" element={<UserProfile /> } />
                <Route path="/lawyer/profile" element={<LawyerProfile /> } />
                {/* {} */}
                <Route path="payment" element={<Payment/>} />
                <Route path="*" element={<ErrorPage /> } />
            </Routes>
        </div>
    )
};