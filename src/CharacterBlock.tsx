import {Character} from "./Types.tsx";

type CharacterBlockProps = {
    key: number
    data: Character
}

export default function CharacterBlock( props: CharacterBlockProps ) {
    return (
        <div className="CharacterBlock">
            <div>id      : {props.data.id      }</div>
            <div>name    : {props.data.name    }</div>
            <div>gender  : {props.data.gender  }</div>
            <div>status  : {props.data.status  }</div>
            <div>type    : {props.data.type    }</div>
            <div>species : {props.data.species }</div>
        </div>
    )
}
