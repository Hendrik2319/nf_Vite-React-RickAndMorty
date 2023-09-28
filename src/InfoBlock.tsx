export type InfoBlockJSON = {
    count: number
    pages: number
    next: string | null
    prev: string | null
}
type InfoBlockProps = {
    data: InfoBlockJSON
}

export function InfoBlock( props: InfoBlockProps ) {
    return (
        <div>
            <div>Count: {props.data.count}</div>
            <div>Pages: {props.data.pages}</div>
            {props.data.prev ? <div>Prev: {props.data.prev}</div> : ""}
            {props.data.next ? <div>Next: {props.data.next}</div> : ""}
        </div>
    )
}
