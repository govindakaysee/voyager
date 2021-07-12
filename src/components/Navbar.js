import { NavBarItem } from './NavBarItem';
import { LoginLogoutBtn } from './LoginLogoutBtn';

const menus = [
    {
        name: 'home',
        text: 'Home'
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
            <LoginLogoutBtn />
        </nav>
    );
}