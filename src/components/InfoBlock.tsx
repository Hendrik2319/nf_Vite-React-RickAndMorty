import {Info} from "./Types.tsx";

type InfoBlockProps = {
    data: Info
}

export default function InfoBlock( props: InfoBlockProps ) {
    console.debug("InfoBlock rendered")
    return (
        <div className="InfoBlock">
            <div>Count: {props.data.count}</div>
            <div>Pages: {props.data.pages}</div>
            {props.data.prev ? <div>Prev: {props.data.prev}</div> : ""}
            {props.data.next ? <div>Next: {props.data.next}</div> : ""}
        </div>
    )
}
