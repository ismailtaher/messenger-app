import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from "firebase/auth";

import { app } from "../firebase"; // Make sure this points to your firebase.js file

const Login = () => {
  const auth = getAuth(app);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const handleFacebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    provider.addScope('email');
    signInWithRedirect(auth, provider);
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Unicat!</h2>
        <div className="login-button google" onClick={handleGoogleSignIn}>
          <GoogleOutlined /> Sign in with Google
        </div>
        <br /> <br />
        <div className="login-button facebook" onClick={handleFacebookSignIn}>
          <FacebookOutlined /> Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;