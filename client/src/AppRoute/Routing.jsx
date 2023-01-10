import { Route, Routes } from "react-router-dom"
import { Home, Filter, Payment, LawyerProfile, ErrorPage } from "./pagesRoute/pages"

export default function Routing() {
    return (
        <div className="main" >
            <Routes>      
                <Route path="/" element={<Home /> } />
                <Route path="/categories" element={<Filter /> } />
                <Route path="/lawyer/profile" element={<LawyerProfile /> } />
                <Route path="payment" element={<Payment/>} />
                <Route path="*" element={<ErrorPage /> } />
            </Routes>
        </div>
    )
};