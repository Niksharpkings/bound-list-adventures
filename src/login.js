import React from "react";
import {GoogleLogin} from 'react-google-login'
//import googleImage from "./assets/googleImage.jpeg";

const baseURL =
  process.env.REACT_APP_MODE === "prod"
    ? "https://itinerary-generator-node.nw.r.appspot.com/"
    : "http://localhost:3000/";

// function App() {
//     const responseGoogle = response => {
//         console.log(response)
//     }
    
//     function responseError(Error) {
//         console.log(Error);
//     }
// }; 
const Login = () => {
  const googleLogin = () => {
    window.open(baseURL + "auth/google", "_self");
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <h1>Login</h1>
        <div className="googleContainer" onClick={googleLogin}>
         
          <p>Login With Google</p>
          <GoogleLogin clientId='739819841055-v1hjgm125rin2g5qts9phuocp1nrro5l.apps.googleusercontent.com'
            buttonText='Sign in and Authorize Calender'
            
            cookiePolicy={'single_host_origin'}
            responseType='code'
            accessType='offline'
            scope='openid email profile https://www.googleapis.com/auth/calendar'
            />
        </div>

      </div>
    </div>
  );
};

export default Login;