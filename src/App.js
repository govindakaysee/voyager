import './App.css';
import { NavBar } from './components/Navbar';
import { Services} from './components/Services';
import { ContactUs } from './components/ContactUs';
import { useEffect } from 'react';
import { About } from './components/About';
import { LakeDis } from './components/LakeDis';

import { Router, Route } from 'wouter';
import firebase from 'firebase';
import { firebaseConfig } from './config/firebase';
import { Login } from './components/auth/Login';

function App() {
    useEffect(() => {
        // Initialize Firebase
        // firebase.initializeApp(firebaseConfig);
    }, []);

    return (
        <div className="App main-container">
            <NavBar />
            <div className = "container main-content">
                <Router>
                    <Route path="/" component={LakeDis} />
                    <Route path="/home" component={LakeDis} />
                    <Route path="/services" component={Services} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={ContactUs} />
                    <Route path="/login" component={Login} />
                </Router>
            </div>
            <footer className="site-footer">
                &copy;Copyright Voyager Co.
            </footer>
        </div>
    );
}

export default App;
