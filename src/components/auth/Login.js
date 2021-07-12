import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'wouter';
import firebase from 'firebase/app';

import { AppContext } from '../../AppContext';

import "./Login.css";
import useLocation from 'wouter/use-location';

export function Login() {
    const [, setLocation] = useLocation();
    const { isLoggedIn } = useContext(AppContext);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setError("");
                setLocation("/");
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };

    if (!isLoggedIn){
        return (
            <div className= "auth-page">
                <div className="auth-container">
                    <form className= "login-form" onSubmit={handleOnSubmit}>
                        <h3>Login Form</h3>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@example.com"
                            value={email}
                        />
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            value={password}
                        />
                        <input type="submit" value="Log In" />
                        {
                            error
                                ? <small className="auth-error">{error}</small>
                                : null
                        }
                    </form>
                    <Link href="/register">
                        <small className="no-account-text">Don't have an account? Create one. -&gt;</small>
                        
                    </Link>
                </div>
            </div>           
        );
    }
    return ( 
        <div>
            <p>You are already logged in.</p> 
        </div>
    );
}