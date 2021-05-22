import React from 'react';
import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around on Social App.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder="Email" pla className="loginInput" />
                        <input type="password" placeholder="Password" pla className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot your password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
