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
        <div className="App">
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
        </div>
    );
}

export default App;
