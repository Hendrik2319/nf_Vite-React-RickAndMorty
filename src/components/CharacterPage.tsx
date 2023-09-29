import {useState} from 'react'
import './CharacterPage.css'
import InfoBlock from './InfoBlock.tsx'
import CharacterList from "./CharacterList.tsx"
import {Character, CharacterResponse} from "./Types.tsx"
import {FilterPredicate, SearchBox} from "./SearchBox.tsx"

type CharacterPageProps = {
    data: CharacterResponse
}

export default function CharacterPage( props: CharacterPageProps ) {
    const [characters, setCharacters] = useState<Character[]>(props.data.results)
    console.debug("CharacterPage rendered")

    function setFilter( predicate?: FilterPredicate ) {
        const filteredCharacterList: Character[] =
            !predicate
                ? props.data.results
                : props.data.results.filter(predicate)

        if (filteredCharacterList.length === 0)
            alert("There are no results")
        else
            setCharacters( filteredCharacterList )
    }

    return (
        <>
            <InfoBlock data={props.data.info}/>
            <SearchBox setFilter={setFilter}/>
            <CharacterList characters={characters}/>
        </>
    )
}
