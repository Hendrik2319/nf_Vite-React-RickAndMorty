import {useParams} from "react-router-dom";
import {CharacterDetails} from "./Types.tsx";

type CharacterDetailCardProps = {
    characters: CharacterDetails[]
}

export default function CharacterDetailCard( props: CharacterDetailCardProps ) {
    const urlParams = useParams();
    const idStr = urlParams.id;
    if (!idStr)
        return <>Can't show chartacter details.<br/>No ID specified.</>

    const id:number = parseInt(idStr);
    const foundCharacters = props.characters.filter(ch => ch.id === id);
    if (foundCharacters.length<1)
        return <>Can't show chartacter details.<br/>Can't find character with this ID.</>

    const foundCharacter = foundCharacters[0];

    return (
        <div>
            <div>id      : {foundCharacter.id      }</div>
            <div>name    : {foundCharacter.name    }</div>
            <div>gender  : {foundCharacter.gender  }</div>
            <div>status  : {foundCharacter.status  }</div>
            <div>type    : {foundCharacter.type    }</div>
            <div>species : {foundCharacter.species }</div>
            <div>origin  : {foundCharacter.origin.name  }</div>
            <div>location: {foundCharacter.location.name }</div>
            <div>created : {foundCharacter.created }</div>
            {
                foundCharacter.image
                    ? <div><img alt={"Image of "+foundCharacter.name} src={foundCharacter.image}/></div>
                    : ""
            }
        </div>
    )
}