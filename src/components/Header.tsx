import './App.css'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="PageNav">
                <Link to={"/"}>Welcome Page</Link>
                <Link to={"/characters"}>Character Page</Link>
            </nav>
        </header>
    )
}