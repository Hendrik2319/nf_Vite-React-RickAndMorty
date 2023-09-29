import {useState} from "react";
import {Character, FilterPredicate} from "./Types.tsx";

type SearchBoxProps = {
    initialValue?: string
    setFilter: ( predicate?: FilterPredicate ) => void
}

export function SearchBox(props: SearchBoxProps) {
    const [searchStr, setSearchStr] = useState<string>(props.initialValue ? props.initialValue : "")
    console.debug("SearchBox rendered")

    function filterData() {
        const searchStrLC = searchStr.toLowerCase();
        props.setFilter(
            (character: Character)=> character.name.toLowerCase().includes(searchStrLC)
        )
    }

    function resetData() {
        props.setFilter()
    }

    return (
        <div className="SearchBox">
            Search by Name:
            <input type="text" value={searchStr} onChange={e => setSearchStr(e.target.value)}/>
            <button onClick={filterData}>Search</button>
            <button onClick={resetData}>Reset</button>
        </div>
    )
}