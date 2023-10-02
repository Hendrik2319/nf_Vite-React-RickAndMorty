import './App.css'
import {Link} from "react-router-dom";

type HeaderProps = {
    loadData: () => void;
}

export default function Header( props: HeaderProps ) {
    return (
        <header>
            <nav className="PageNav">
                <Link to={"/"}>Welcome Page</Link>
                <Link to={"/characters"}>Character Page</Link>
                <Link to={"/characters/add"}>Add Character</Link>
                <button onClick={props.loadData}>Load Data</button>
            </nav>
        </header>
    )
}