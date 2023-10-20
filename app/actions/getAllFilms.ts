export function getAllFilms () : Promise<FilmsResponse> {
    return fetch('https://swapi.tech/api/films').then(res => res.json()) // SSG - getStaticProps  next: {revalidate: 60} - ISR - getStaticProps and revalidate
}