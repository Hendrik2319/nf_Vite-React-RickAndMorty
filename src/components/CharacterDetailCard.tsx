import {useParams} from "react-router-dom";

export default function CharacterDetailCard() {
    const urlParams = useParams();
    return (
        <>
            Details for charcter with ID {urlParams.id}
        </>
    )
}