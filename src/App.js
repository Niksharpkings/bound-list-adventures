import './App.css';

//import logo from './logo.svg';
import Main from "./main";
import Footer from "./footer";
import Login from "./login";
import NavBar from "./NavBar";

//import {GoogleLogin} from 'react-google-login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  // const responseGoogle = response => {
  //   console.log(response)
  // }

  // function responseError(Error) {
  //   console.log(Error);
  // }
  return (
    <div>
        <div className="App">
            <h1> Bound List Adventures Calendar </h1>
            <Router>
              <NavBar />
              <Routes>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                {/* <Route path="/latest" component={Latest} />
                <Route path="/profile" component={Profile} /> */}
              </Routes>
            </Router>
          </div>
          {/* <div>
            <GoogleLogin clientId='739819841055-v1hjgm125rin2g5qts9phuocp1nrro5l.apps.googleusercontent.com'
            buttonText='Sign in and Authorize Calender'
            onSuccess={responseGoogle}
            onFailure={responseError} 
            cookiePolicy={'single_host_origin'}
            responseType='code'
            accessType='offline'
            scope='openid email profile https://www.googleapis.com/auth/calendar'
            />
            
        </div> */}
        <Footer />
    </div>
  );
}

export default App;
