import CharacterBlock from "./CharacterBlock.tsx";
import {Character, FilterPredicate} from "./Types.tsx";
import {useState} from "react";

type CharacterListProps = {
    characters: Character[]
    propagateSetFilterFcn: ( setFilter: (predicate?: FilterPredicate) => void ) => void
}

export default function CharacterList(props: CharacterListProps) {
    const [characters, setCharacters] = useState<Character[]>(props.characters)
    console.debug("CharacterList rendered")

    function setFilter( predicate?: FilterPredicate ) {
        const filteredCharacterList: Character[] =
            !predicate
                ? props.characters
                : props.characters.filter(predicate)

        if (filteredCharacterList.length === 0)
            alert("There are no results")
        else
            setCharacters( filteredCharacterList )
    }

    props.propagateSetFilterFcn(setFilter)

    return (
        <div className="CharacterList">
            {characters.map( char => <CharacterBlock key={char.id} data={char}/>) }
        </div>
    )
}