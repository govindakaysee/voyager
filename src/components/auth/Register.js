import { useContext, useState } from 'react';
import firebase from 'firebase/app';
import { AppContext } from '../../AppContext';

export function Register() {
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ name, setName ] = useState("");
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

                    const db = firebase.firestore();
                    db.collection("users").doc(email).set({
                        email,
                        username,
                        name
                    }).then((res) => {
                        console.log(res);
                        console.log("User details added.");
                    }).catch((err) => {
                        console.log(err);
                    });
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
                            type="text"
                            onChange={({ target }) => setName(target.value)}
                            placeholder="Name"
                            value={name}
                            required
                        />
                        <input
                            type="text"
                            onChange={( { target }) => setUsername(target.value)}
                            placeholder="username"
                            value={username}
                            required
                        />
                        <input
                            type="email"
                            onChange={({ target }) => setEmail(target.value)}
                            placeholder="example@example.com"
                            value={email}
                            required
                        />
                        <input
                            type="password"
                            onChange={({ target }) => setPassword(target.value)}
                            placeholder="Enter password"
                            value={password}
                            required
                        />
                        <input
                            type="password"
                            onChange={({ target }) => setConfirmPassword(target.value)}
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