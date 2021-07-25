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

function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ userEmail, setUserEmail ] = useState(null);

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }else {
            firebase.app(); // if already initialized, use that one
        }
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUserEmail(user.email);
                console.log(`User ${user.email} is logged in.`);
                // ...
            } else {
                // User is signed out
                // ...
                setIsLoggedIn(false);
                setUserEmail(null);
                console.log("User is not logged in.");
            }
        });
    }, []);

    return (
        <AppContext.Provider value={{ isLoggedIn, username: userEmail }}>
            <div className="App main-container">
                <NavBar />
                <div className = "container main-content">
                    <Router>
                        <Route path="/" component={LakeDis} />
                        <Route path="/home" component={LakeDis} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={ContactUs} />
                        <Route path="/login" component={Login} />
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
