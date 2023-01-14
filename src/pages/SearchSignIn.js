import React, { useEffect } from "react";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SearchSignin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <>
        <Header />
        <GoogleButton onClick={handleGoogleSignIn} />
        <Footer />
    </>
  );
};

export default SearchSignin;



