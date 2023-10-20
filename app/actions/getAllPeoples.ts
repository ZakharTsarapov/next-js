export function getAllPeoples () : Promise<PeopleResponse> {
    return fetch('https://swapi.dev/api/people', { cache: 'no-store' }).then(res => res.json()) // SSR - getServerSideProps
}