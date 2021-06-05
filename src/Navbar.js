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
            {
                menus.map((menu) => {
                    return (
                        <NavBarItem 
                            menu={menu}
                            setCurrPage={props.setCurrPage}
                            currPage={props.currPage}
                            key={menu.name}
                        />
                    );
                })
            }
        </nav>
    );
}