import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../context/UserContext';
import {FacebookLoginButton,GoogleLoginButton} from 'react-social-login-buttons';

// import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { googleSignIn,facebookSignIn, user } = UserAuth();
  // const navigate = useNavigate();

  const handleGoogleSignIn = async () => {

    try {
      await googleSignIn();
      
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user != null) {
  //     navigate('/account');
  //   }
  // }, [user]);



  const signInWithFacebook = async () => {
      try {
      return  await facebookSignIn();
        
      } catch (error) {
        console.log(error);
      }
    };
  
  return (
    <div className='  signIn'>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4 d-flex justify-content-center'>
        <GoogleLoginButton style={{width:"250px"}} onClick={handleGoogleSignIn} />
      </div>
      <div className='max-w-[240px] m-auto py-4 d-flex justify-content-center'>
        <FacebookLoginButton style={{width:"250px"}} onClick={signInWithFacebook} />
      
      </div>
    </div>
  );
};
export default SignIn;