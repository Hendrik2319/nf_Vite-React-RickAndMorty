import './App.css'
import {Navigate, Route, Routes} from "react-router-dom"
import Welcome from "./Welcome.tsx";
import CharacterPage from "./CharacterPage.tsx";
import Header from "./Header.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";
import StoredData from './Data.json'

export default function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterPage data={StoredData}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetailCard characters={StoredData.results}/>}/>
                <Route path={"/*"} element={<Navigate to={"/"}/>}/>
            </Routes>
        </>
    )
}

