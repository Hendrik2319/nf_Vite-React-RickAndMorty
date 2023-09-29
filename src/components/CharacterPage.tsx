import './CharacterPage.css'
import InfoBlock from './InfoBlock.tsx'
import CharacterList from "./CharacterList.tsx"
import {CharacterResponse, FilterPredicate} from "./Types.tsx"
import {SearchBox} from "./SearchBox.tsx"

type CharacterPageProps = {
    data: CharacterResponse
}

type SetFilterFcn = ( predicate?: FilterPredicate ) => void

export default function CharacterPage( props: CharacterPageProps ) {
    let setFilterInCharacterList: null | SetFilterFcn = null
    console.debug("CharacterPage rendered")

    function setFilter( predicate?: FilterPredicate ) {
        if (setFilterInCharacterList)
            setFilterInCharacterList( predicate )
    }

    function propagateSetFilter( setFilter: SetFilterFcn ) {
        setFilterInCharacterList = setFilter
    }

    return (
        <>
            <InfoBlock data={props.data.info}/>
            <SearchBox setFilter={setFilter}/>
            <CharacterList characters={props.data.results} propagateSetFilterFcn={ propagateSetFilter }/>
        </>
    )
}
