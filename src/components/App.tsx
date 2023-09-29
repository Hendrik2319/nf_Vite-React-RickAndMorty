import './App.css'
import {Navigate, Route, Routes} from "react-router-dom"
import Welcome from "./Welcome.tsx";
import CharacterPage from "./CharacterPage.tsx";
import Header from "./Header.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";

export default function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterPage/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetailCard/>}/>
                <Route path={"/*"} element={<Navigate to={"/"}/>}/>
            </Routes>
        </>
    )
}

