import { useState } from 'react'
import './App.css'
import StoredData from './Data.json'
import { InfoBlock, InfoJSON } from './InfoBlock.tsx'
import { CharacterBlock, CharacterJSON } from './CharacterBlock.tsx'


export default function App() {
    const [data, setData] = useState(StoredData)

    return (
        <>
            <InfoBlock data={data.info}/>
            <div className="CharacterContainer">
                {data.results.map( char => <CharacterBlock key={char.id} data={char}/>) }
            </div>
        </>
    )
}
