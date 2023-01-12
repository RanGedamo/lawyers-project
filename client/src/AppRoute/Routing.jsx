import { Route, Routes  } from "react-router-dom"
import { Home, Filter, Payment, LawyerProfile, ErrorPage } from "./pagesRoute/pages"
import StamHome from "../pages/Home/StamHome"

export default function Routing() {
    return (
        <div className="main" >
            <Routes>      
                <Route path="/" element={<StamHome /> } />
                <Route path={'/category/:id'} element={<Filter /> } />
                <Route path="/lawyer/profile/:id" element={<LawyerProfile /> } />
                <Route path="/payment" element={<Payment/>} />
                <Route path="*" element={<ErrorPage /> } />
            </Routes>
        </div>
    )
};