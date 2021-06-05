import React from 'react';

export function NavBarItem({ currPage, menu, setCurrPage }) {
    return (
        <div
            className={`nav-item ${currPage === menu.name ? "nav-item-selected"  : null }`}
            onClick={() => setCurrPage(menu.name)}
        >{menu.text}</div>
    );
}