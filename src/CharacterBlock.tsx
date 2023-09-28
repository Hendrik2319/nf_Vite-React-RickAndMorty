export type CharacterJSON = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
}
type CharacterBlockProps = {
    key: number
    data: CharacterJSON
}

export function CharacterBlock( props: CharacterBlockProps ) {
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
