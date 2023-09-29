import './App.css'
import {Navigate, Route, Routes} from "react-router-dom"
import Welcome from "./Welcome.tsx";
import CharacterPage from "./CharacterPage.tsx";
import Header from "./Header.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";
import StoredData from './Data.json'
import {CharacterDetails, Info, NewCharacter} from "./Types.tsx";
import {useState} from "react";
import AddCharacter from "./AddCharacter.tsx";

type RawData = {
    info: Info
    results: CharacterDetails[]
}

export default function App() {
    const [data, setData] = useState<RawData>(StoredData)

    function findUnusedId(): number {
        const maxId = data.results.map(cd => cd.id).reduce( (id1, id2) => Math.max(id1,id2), 0);
        return maxId + 1
    }

    function addCharacter(newCharacter: NewCharacter) {
        const character: CharacterDetails = {
            id     : findUnusedId(),
            name   : newCharacter.name   ,
            gender : newCharacter.gender ,
            status : newCharacter.status ,
            type   : newCharacter.type   ,
            species: newCharacter.species,
        }
        const newData: RawData = {
            info: data.info,
            results: [ ...data.results, character ]
        }
        setData(newData)
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterPage data={data}/>}/>
                <Route path={"/characters/:id"} element={<CharacterDetailCard characters={data.results}/>}/>
                <Route path={"/characters/add"} element={<AddCharacter addCharacter={addCharacter}/>}/>
                <Route path={"/*"} element={<Navigate to={"/"}/>}/>
            </Routes>
        </>
    )
}

