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
            {foundCharacter.origin   && <div>origin   : <a href={foundCharacter.origin  .url}>{foundCharacter.origin  .name}</a></div>}
            {foundCharacter.location && <div>location : <a href={foundCharacter.location.url}>{foundCharacter.location.name}</a></div>}
            {foundCharacter.created  && <div>created  : {foundCharacter.created}</div>}
            {foundCharacter.image    && <div><img alt={"Image of "+foundCharacter.name} src={foundCharacter.image}/></div>}
            {foundCharacter.episode  && <div>episodes:<br/><ol>{
                foundCharacter.episode.map( (ep, index) => <li key={index}><a href={ep}>{ep}</a></li> )
            }</ol></div>}
        </div>
    )
}