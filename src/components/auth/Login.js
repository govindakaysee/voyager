import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

export function Login() {
    const { isLoggedIn } = useContext(AppContext);
    if (!isLoggedIn){
        return (
            <div className= "login-page">
                <div className= "form">
                    <form className= "register-form">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Password"/>
                        <input type="text" placeholder="Email id"/>
                        <input type="number" placeholder="Phone Number"/>
                        <input type="date"/>
                        <button>Create</button>
                    </form>
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