import './App.css';
import { NavBar } from './components/Navbar';
import { ContactUs } from './components/ContactUs';
import { useEffect, useState } from 'react';
import { About } from './components/About';
import { LakeDis } from './components/LakeDis';
import { Explore } from './components/Explore';

import { Router, Route } from 'wouter';
import firebase from 'firebase/app';
import { firebaseConfig } from './config/firebase';
import "firebase/auth";
import { Login } from './components/auth/Login';


import { AppContext } from './AppContext';
import { Register } from './components/auth/Register';

function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ userDetails, setUserDetails ] = useState(null);
    // const [ userEmail, setUserEmail ] = useState(null);
    // const [ ]

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }else {
            firebase.app(); // if already initialized, use that one
        }
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                console.log(`User ${user.email} is logged in.`);

                const db = firebase.firestore();
                db.collection("users").doc(user.email).get()
                .then((doc) => {
                    if (doc.exists) {
                        let usr = doc.data();
                        setUserDetails(usr);
                    } else {
                        console.log("User details not found!");
                    }
                }).catch((err) => {
                    console.log(err);
                });
                // ...
            } else {
                // User is signed out
                // ...
                setIsLoggedIn(false);
                setUserDetails(null);
                console.log("User is not logged in.");
            }
        });
    }, []);

    return (
        <AppContext.Provider value={{ isLoggedIn, ...userDetails }}>
            <div className="App main-container">
                <NavBar />
                <div className = "container main-content">
                    <Router>
                        <Route path="/" component={LakeDis} />
                        <Route path="/home" component={LakeDis} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={ContactUs} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/explore/:id">
                            {params => <Explore lakeId={params.id} />}
                        </Route>
                    </Router>
                </div>
                <footer className="site-footer">
                    &copy;Copyright Voyager Co.
                </footer>
            </div>
        </AppContext.Provider>
    );
}

export default App;
