import { Route, Routes } from "react-router-dom"
import Chat from "./component/chat/Chat"
import Home from "./pages/Home/Home"
import SignUpSignInForm from "./pages/signUpSignInForm"



const Routing = () => {

    return (
        <div className="routing main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="SignIn" element={<signUpSignInForm />} />
            </Routes>
            <div className="chat">
                <Chat />
            </div>
        </div>
    )
}

export default Routing