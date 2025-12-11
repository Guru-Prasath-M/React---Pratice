import { Link } from "react-router-dom";

let Navbar = ()=>{
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="/home" className="navbar-brand">LOGO</a>
            <div className="ml-auto">
                <ul className="navbar-nav">
                {/* <li><a href="/home" className="nav-link">Home</a></li>
                <li><a href="/contact" className="nav-link">Contact</a></li>
                <li><a href="/login" className="nav-link">Login</a></li> */}

                <li><Link to="/home" className="nav-link">Home</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
                </ul>
            </div>
            </nav>
}
export default Navbar;