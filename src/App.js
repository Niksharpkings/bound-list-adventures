import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from 'react-google-login'

function App() {
  const responseGoogle = response => {
    console.log(response)
  }

  function responseError(Error) {
    console.log(Error);
  }
  return (
<div>
    <div className="App">
        <h1> Bound list Adventures Calendar </h1>
      </div>
      <div>
        <GoogleLogin clientId='739819841055-v1hjgm125rin2g5qts9phuocp1nrro5l.apps.googleusercontent.com'
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
