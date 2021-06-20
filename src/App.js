import './App.css';
import { NavBar } from './Navbar';
//import { MainBody } from './MainBody';
import { Services} from './Services';
import { ContactUs } from './ContactUs';
import { useState } from 'react';
import { About } from './About';
import {LakeDis} from './LakeDis';

function App() {
    const [ currPage, setCurrPage ] = useState("home");

    return (
        <div className="App main-container">
            <NavBar currPage={currPage} setCurrPage={setCurrPage} />
            {
                currPage === "home"
                    ? <LakeDis />
                    : currPage === "services"
                        ? <Services />
                        : currPage === "about"
                            ? <About />
                            : <ContactUs />
            }
            <footer className="site-footer">
                &copy;Copyright Voyager Co.
            </footer>
        </div>
    );
}

export default App;
