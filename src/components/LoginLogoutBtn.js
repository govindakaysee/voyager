import { useContext } from 'react';
import { Link } from 'wouter';
import firebase from 'firebase/app';
import "firebase/auth";

import { AppContext } from '../AppContext';

export function LoginLogoutBtn() {
    const { isLoggedIn } = useContext(AppContext);

    const handleClick = () => {
        if (isLoggedIn) {
            console.log('Logout button clicked.');
            firebase.auth().signOut();
        }
    };

    return (
        <Link
            href={isLoggedIn ? "/" : "/login"}
            className={`login-logout-btn ${isLoggedIn ? 'logout-btn' : 'login-btn'}`}
            onClick={handleClick}
        >
            {isLoggedIn ? "Logout" : "Login" }
        </Link>
    );
}