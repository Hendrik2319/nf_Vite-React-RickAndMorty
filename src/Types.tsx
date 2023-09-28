export type Info = {
    count: number
    pages: number
    next: string | null
    prev: string | null
}

export type Character = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
}

export type CharacterResponse = {
    info: Info
    results: Character[]
}

