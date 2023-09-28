import {useState} from 'react'
import './App.css'
import StoredData from './Data.json'
import InfoBlock from './InfoBlock.tsx'
import CharacterList from "./CharacterList.tsx";


export default function App() {
    const [data, setData] = useState(StoredData)

    return (
        <>
            <InfoBlock data={data.info}/>
            <CharacterList characters={data.results}/>
c        </>
    )
}
