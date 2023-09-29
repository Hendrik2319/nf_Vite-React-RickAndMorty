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

export type Location = {
    name: string
    url: string
}

export type CharacterDetails = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Location
    location: Location
    image: string,
    episode: string[]
    url: string,
    created: string
}

