import {useParams} from "react-router-dom";
import {Character} from "./Types.tsx";

type CharacterDetailCardProps = {
    characters: Character[]
}

export default function CharacterDetailCard( props: CharacterDetailCardProps ) {
    const urlParams = useParams();
    return (
        <>
            Details for charcter with ID {urlParams.id}
        </>
    )
}