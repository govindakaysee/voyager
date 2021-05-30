import './App.css';
import { NavBar } from './Navbar';
import { MainBody } from './MainBody';
import { Services} from './Services';
import { ContactUs } from './ContactUs';
import { useState } from 'react';
import { About } from './About';

function App() {
    const [ currPage, setCurrPage ] = useState("home");

    return (
        <div className="App">
            <NavBar currPage={currPage} setCurrPage={setCurrPage} />
            {
                currPage === "home"
                    ? <MainBody />
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
