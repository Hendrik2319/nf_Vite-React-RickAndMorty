import CharacterBlock from "./CharacterBlock.tsx";
import {Character} from "./Types.tsx";

type CharacterListProps = {
    characters: Character[]
}

export default function CharacterList(props: CharacterListProps) {
    return (
        <div className="CharacterList">
            {props.characters.map( char => <CharacterBlock key={char.id} data={char}/>) }
        </div>
    )
}