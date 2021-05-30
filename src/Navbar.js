export function NavBar(props) {
    
    return (
        <nav className="nav-menu">
            <div
                className={`nav-item ${props.currPage === "home" ? "nav-item-selected"  : null }`}
                onClick={() => props.setCurrPage("home")}
            >Home</div>
            <div
                className={`nav-item ${props.currPage === "services" ? "nav-item-selected"  : null }`}
                onClick={() => props.setCurrPage("services")}
            >Services</div>
            <div 
                className={`nav-item ${props.currPage === "about" ? "nav-item-selected"  : null }`}
                onClick={()=> props.setCurrPage("about")}
            >About</div>
            <div 
                className={`nav-item ${props.currPage === "contact" ? "nav-item-selected"  : null }`}
                onClick={()=>props.setCurrPage("contact")}
            >Contact Us</div>
        </nav>
    );
}