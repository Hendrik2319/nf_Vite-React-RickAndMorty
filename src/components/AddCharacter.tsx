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

type SetValueFcn = (value:string, newCharacter: NewCharacter) => void
type ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => void

export default function AddCharacter( props: AddCharacterProps) {
    const [newCharacter, setNewCharacter]
        = useState<NewCharacter>(createEmptyCharacter())

    function setValue( event: ChangeEvent<HTMLInputElement>, changeAValue: SetValueFcn ) {
        const changedNewCharacter: NewCharacter = {
            name   : newCharacter.name   ,
            gender : newCharacter.gender ,
            status : newCharacter.status ,
            type   : newCharacter.type   ,
            species: newCharacter.species,
        }
        changeAValue( event.target.value, changedNewCharacter )
        setNewCharacter( changedNewCharacter )
    }

    function saveCharacter( event: FormEvent<HTMLFormElement> ) {
        event.preventDefault()
        props.addCharacter(newCharacter)
        setNewCharacter( createEmptyCharacter() )
    }

    function createOnChangeFcn( changeAValue: SetValueFcn ): ChangeEventHandler {
        return e => setValue( e, changeAValue )
    }

    return (
        <form className="AddCharacterForm" onSubmit={saveCharacter}>
            <label>name    : <input value={newCharacter.name    } onChange={createOnChangeFcn((val,ch)=>ch.name    = val)}/></label>
            <label>gender  : <input value={newCharacter.gender  } onChange={createOnChangeFcn((val,ch)=>ch.gender  = val)}/></label>
            <label>status  : <input value={newCharacter.status  } onChange={createOnChangeFcn((val,ch)=>ch.status  = val)}/></label>
            <label>type    : <input value={newCharacter.type    } onChange={createOnChangeFcn((val,ch)=>ch.type    = val)}/></label>
            <label>species : <input value={newCharacter.species } onChange={createOnChangeFcn((val,ch)=>ch.species = val)}/></label>
            <button>Save</button>
        </form>
    )
}