import {useState} from 'react'
import './App.css'
import StoredData from './Data.json'
import InfoBlock from './InfoBlock.tsx'
import CharacterList from "./CharacterList.tsx";
import {Character, CharacterResponse} from "./Types.tsx";
import {FilterPredicate, SearchBox} from "./SearchBox.tsx";

export default function App() {
    const [data, setData] = useState<CharacterResponse>(StoredData)
    console.debug("App rendered")

    function setFilter( predicate?: FilterPredicate ) {
        const filteredCharacterList: Character[] =
            !predicate
                ? StoredData.results
                : StoredData.results.filter(predicate)

        if (filteredCharacterList.length === 0)
            alert("There are no results")
        else
            setData( {
                info: StoredData.info,
                results: filteredCharacterList
            })
    }

    return (
        <>
            <InfoBlock data={data.info}/>
            <SearchBox setFilter={setFilter}/>
            <CharacterList characters={data.results}/>
        </>
    )
}
