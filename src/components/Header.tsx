import './App.css'
import {Link} from "react-router-dom";

type HeaderProps = {
    loadData: () => void;
    setPage: ( page: number ) => void
    page: number
}

export default function Header( props: HeaderProps ) {
    return (
        <header>
            <nav className="PageNav">
                <Link to={"/"}>Welcome Page</Link>
                <Link to={"/characters"}>Character Page</Link>
                <Link to={"/characters/add"}>Add Character</Link>
                <button onClick={props.loadData}>Load Data</button>
                <div>
                    <button onClick={() => props.setPage(props.page-1)}>&lt;</button>
                    <span>&nbsp;{props.page}&nbsp;</span>
                    <button onClick={() => props.setPage(props.page+1)}>&gt;</button>
                </div>
            </nav>
        </header>
    )
}