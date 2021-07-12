import React from 'react';
import { Link, useLocation } from 'wouter';

export function NavBarItem({ menu }) {
    const [location] = useLocation();
    const currPage = location.split("/")[1];
    return (
        <Link
            className={`nav-item ${(!currPage && menu.name === "home") || currPage === menu.name ? "nav-item-selected"  : null }`}
            href={`/${menu.name}`}
        >{menu.text}</Link>
    );
}