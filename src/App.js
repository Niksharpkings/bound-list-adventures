import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from 'react-google-login'

function App() {
  const responseGoogle = (response) => {
    console.log(response)
  }

  const responseError = (error) => {
    console.log(error)
  }
  return (
<div>
    <div className="App">
        <h1> Boundlist Adventures Calendar </h1>
      </div>
      <div>
        <GoogleLogin clientId='170577696615-tpfe1ghcnohr1a5imjtp75a0u9qn5prj.apps.googleusercontent.com'
        buttonText='Sign in and Authorize Calender'
        onSuccess={responseGoogle}
        onFailure={responseError} 
        cookiePolicy={'single_host_origin'}
        responseType='code'
        accessType='offline'
        scope='openid email profile https://www.googleapis.com/auth/calendar'
        />
      </div>
      </div>
  );
}

export default App;
