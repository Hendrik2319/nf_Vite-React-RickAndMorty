import { useState } from 'react'
import './App.css'
import StoredData from './Data.json'
import { InfoBlock, InfoBlockJSON } from './InfoBlock.tsx'


export default function App() {
    const [data, setData] = useState(StoredData)

    return (
        <>
            <InfoBlock data={data.info}/>
        </>
    )
}
