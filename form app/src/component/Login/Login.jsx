import React from 'react'
import "./login.css";

const Login = () => {
    return (
        <div>
            <h4>Login Page</h4>
            <label htmlFor="email" id='hhh'>Email:</label><br></br>
            <input placeholder="Enter your email" id="aaa"></input><br></br>
            <label htmlFor="password">Password:</label><br></br>
            <input placeholder="**********" id="bbb"></input><br></br>
            <input placeholder="log in" id="ddd"></input>
            <h6>OR</h6>
            <div>

                <input placeholder='Sign in with google' id="ccc"></input>
                <h6>Dont have an account?</h6><p>Register now</p>
            </div>

        </div>
    )
}

export default Login;
