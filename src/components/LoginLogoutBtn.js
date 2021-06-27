import { useContext } from 'react';
import { Link } from 'wouter';
import { AppContext } from '../AppContext';

export function LoginLogoutBtn() {
    const { isLoggedIn } = useContext(AppContext);
    return (
        <Link
            href={isLoggedIn ? "/" : "/login"}
            className={`login-logout-btn ${isLoggedIn ? 'logout-btn' : 'login-btn'}`}
            onClick={() => {
                if (isLoggedIn) console.log('Logout button clicked.');
                else console.log('Login button clicked.');
            }}
        >
            {isLoggedIn ? "Logout" : "Login" }
        </Link>
    );
}