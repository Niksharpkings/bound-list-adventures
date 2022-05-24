import React from 'react';
import ReactDOM from 'react-dom';
// or
import { GoogleLogin } from 'react-google-login';



function App() {

const responseGoogle = () => {
    console.log(response) 
}

const responseError = () => {
    console.log(error) 
}

    return(
        <div>

            <div className='App'>
                <h1>Google Calendar</h1>
            </div>
            <div>
                <GoogleLogin clientId='61668977007-sl93ml2b3pad8uklnv3gnrt2tp1u7vlt.apps.googleusercontent.com' 
                buttonText='Sign in & Authorize '
                onSuccess={responseGoogle}
                onFailure={responseError}
                cookiePolicy={'single_host_origin'}
                responseType='code'
                accessType='offline'
                scope='openid email profile https://www.googleapis.com/auth/calendar'
                />
            </div>
        </div >
    )
}


export default App