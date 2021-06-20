import { Link } from 'wouter';

import { NavBarItem } from './NavBarItem';

const menus = [
    {
        name: 'home',
        text: 'Home'
    },
    {
        name: 'services',
        text: 'Services',
    },
    {
        name: 'about',
        text: 'About',
    },
    {
        name: 'contact',
        text: 'Contact Us',
    }
];

export function NavBar(props) {
    return (
        <nav className="nav-menu">
            <div className="main-nav-menu">
            {
                menus.map((menu) => {
                    return (
                        <NavBarItem 
                            menu={menu}
                            key={menu.name}
                        />
                    );
                })
            }
            </div>
            <Link href="/login" className="login-btn">Login</Link>
        </nav>
    );
}