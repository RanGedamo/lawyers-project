

import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../../context/UserContext';



const Header = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (

<nav className="navbar navbar-light bg-light">
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
        <Link to='/signin'>Sign in</Link>
      )}
  </div>
</nav>
  );
};

export default Header;