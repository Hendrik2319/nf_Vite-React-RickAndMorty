import {Character} from "./Types.tsx";
import {Link} from "react-router-dom";

type CharacterBlockProps = {
    key: number
    data: Character
}

export default function CharacterBlock( props: CharacterBlockProps ) {
    return (
        <Link className="CharacterBlock" to={"/characters/"+props.data.id}>
            <div>id      : {props.data.id      }</div>
            <div>name    : {props.data.name    }</div>
            <div>gender  : {props.data.gender  }</div>
            <div>status  : {props.data.status  }</div>
            <div>type    : {props.data.type    }</div>
            <div>species : {props.data.species }</div>
        </Link>
    )
}
