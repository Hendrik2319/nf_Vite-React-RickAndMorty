import './App.css'
import {Navigate, Route, Routes} from "react-router-dom"
import Welcome from "./Welcome.tsx";
import CharacterPage from "./CharacterPage.tsx";
import Header from "./Header.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";
import {CharacterDetails, Info, NewCharacter} from "./Types.tsx";
import {useState} from "react";
import AddCharacter from "./AddCharacter.tsx";
import axios from "axios";

type RawData = {
    info: Info
    results: CharacterDetails[]
}

export default function App() {
    const [data, setData] = useState<RawData>(
        {
            info: {
                count: 0,
                pages: 0,
                next: null,
                prev: null
            },
            results: []
        })
    console.debug("App rendered")

    function findUnusedId(): number {
        const maxId = data.results.map(cd => cd.id).reduce( (id1, id2) => Math.max(id1,id2), 0);
        return maxId + 1
    }

    function addCharacter(newCharacter: NewCharacter) {
        const character: CharacterDetails = {
            id: findUnusedId(),
            ...newCharacter,
        }
        const newData: RawData = {
            info: data.info,
            results: [ ...data.results, character ]
        }
        setData(newData)
    }

    function loadData() {
        axios
            .get('https://rickandmortyapi.com/api/character/')
            .then( response => {
                if (response.status!=200)
                    throw { error: "Got wrong status on load data: "+response.status }

                return response.data;
            })
            .then( data => {
                console.log(data)
                setData(data)
            } )
            .catch( reason => {
                console.error(reason)
            } )
    }

    return (
        <>
            <Header loadData={loadData}/>
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

