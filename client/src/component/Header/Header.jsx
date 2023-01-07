import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/UserContext";
import Chat from "../chat/Chat";

const Header = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <nav className="navbar navbar-light bg-light" style={{width:"100%"}}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="20"
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        {user?.displayName ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          <Link to="/signin">Sign in</Link>
        )}
      </div>
    </nav>
      <div className="chat d-flex sticky-top" style={{height:"0px",justifyContent:"end",width:"100"}}>
                <Chat />
            </div>
            </>
  );
};

export default Header;
