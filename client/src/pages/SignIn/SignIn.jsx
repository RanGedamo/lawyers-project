import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../context/UserContext';
// import { useNavigate } from 'react-router-dom';

function SignIn(){
  const { googleSignIn, user } = UserAuth();
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

  return (
    
    <div className='  signIn'>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4 d-flex justify-content-center'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default SignIn;