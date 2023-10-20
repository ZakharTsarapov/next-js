import { getAllPeoples } from "../actions/getAllPeoples"

export default async function PeoplePage() {

    const allPeople = await getAllPeoples()

    return(
        <div>
            {allPeople.results.map(people => (
                <div key={people.url}>{people.name}</div>
            ))}
        </div>
    )
}