

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

<nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        height="20"
        alt="MDB Logo"
        loading="lazy"
      />
    </a>
    {user?.displayName ? (
        <h5>{user?.email}</h5>,
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
  </div>
</nav>

    // <div className='flex justify-between bg-gray-200 w-full p-4'>
    //   <h1 className='text-center text-2xl font-bold'>
    //     Firebase Google Auth & Context
    //   </h1>
    //   {user?.displayName ? (
    //     <button onClick={handleSignOut}>Logout</button>
    //   ) : (
    //     <Link to='/signin'>Sign in</Link>
    //   )}
    // </div>
  );
};

export default Header;