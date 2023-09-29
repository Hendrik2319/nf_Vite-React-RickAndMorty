import {NewCharacter} from "./Types.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import './AddCharacter.css'

type AddCharacterProps = {
    addCharacter: (newCharacter: NewCharacter) => void
}

function createEmptyCharacter(): NewCharacter {
    return {
        name   : '',
        gender : '',
        status : '',
        type   : '',
        species: '',
    }
}

export default function AddCharacter( props: AddCharacterProps) {
    const [newCharacter, setNewCharacter]
        = useState<NewCharacter>(createEmptyCharacter())
    console.debug("AddCharacter rendered")

    function onChangeFcn( event: ChangeEvent<HTMLInputElement> ) {
        setNewCharacter( {
            ...newCharacter,
            [event.target.name]: event.target.value
        } )
    }

    function saveCharacter( event: FormEvent<HTMLFormElement> ) {
        event.preventDefault()
        props.addCharacter(newCharacter)
        setNewCharacter( createEmptyCharacter() )
    }

    return (
        <form className="AddCharacterForm" onSubmit={saveCharacter}>
            <label>name    : <input name="name"    value={newCharacter.name    } onChange={onChangeFcn}/></label>
            <label>gender  : <input name="gender"  value={newCharacter.gender  } onChange={onChangeFcn}/></label>
            <label>status  : <input name="status"  value={newCharacter.status  } onChange={onChangeFcn}/></label>
            <label>type    : <input name="type"    value={newCharacter.type    } onChange={onChangeFcn}/></label>
            <label>species : <input name="species" value={newCharacter.species } onChange={onChangeFcn}/></label>
            <button>Save</button>
        </form>
    )
}