import { useContext, useState } from 'react';
import firebase from 'firebase/app';
import { AppContext } from '../../AppContext';

export function Register() {
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ error, setError]  = useState("");
    const { isLoggedIn } = useContext(AppContext);

    function handleOnSubmit(e){
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Confirm password must be the same as password");
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log("User registered successfully.");
                    setError("");
                })
                .catch((error) => {
                    console.log(error);
                    setError(error.message);
                });
        }
    }

    if (!isLoggedIn) {
        return (
            <div className= "auth-page">
                <div className="auth-container">
                    <form className= "auth-form" onSubmit={handleOnSubmit}>
                        <h3>Register Form</h3>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@example.com"
                            value={email}
                            required
                        />
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            value={password}
                            required
                        />
                        <input
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Re-enter password"
                            value={confirmPassword}
                            required
                        />
                        <input type="submit" value="Register" />
                        {
                            error
                                ? <small className="auth-error">{error}</small>
                                : null
                        }
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