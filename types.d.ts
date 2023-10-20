interface Film {
    properties: FilmProperties
    description: string
    _id: string
    uid: string
    __v: number
  }
  
interface FilmProperties {
    characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  producer: string
  title: string
  episode_id: number
  director: string
  release_date: string
  opening_crawl: string
  url: string
  }

interface FilmsResponse {
    message: string,
    result: Film[]
  }

  interface FilmResponse {
    message: string,
    result: Film
  }

interface People {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: string[]
    species: any[]
    vehicles: string[]
    starships: string[]
    created: string
    edited: string
    url: string
  }

interface PeopleResponse {
    count: number
    next: string
    previous: number | null
    results: People[]
}

