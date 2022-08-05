import React, { useState, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginContext } from "./LoginContext";
export default function Register() {    
    const { setUserLogin , setUserName } = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUserName(email.substring(0, [4]));
                setUserLogin(true)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    };
    return (
        <div className="login">
            <div className="form">
                <h2>CHATTY MATTY ( A WhatsApp Clone )</h2>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Please enter your email here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <h5>Password must be 6 Digit long and must contain special character</h5>

                </div>
                <button id="submit-btn" onClick={signUp()}>
                    Sign Up
                </button>
                <p>Already have an account ?</p>
                <Link to="/login">
                    <span>Sign In</span>
                </Link>
            </div>
        </div>
    );
}