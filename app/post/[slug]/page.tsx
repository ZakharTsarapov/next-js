// interface IParams {
//     params: {
//         id: string
//     }
// }

export async function generateStaticParams() {
    const films = await fetch('https://swapi.dev/api/films/').then((res) => res.json())
   
    return films.results.map((film: any) => ({
      slug: film.title.replace(/\s+/g, '-'),
    }))
  }

export default function Post ({params}: any) {
    return (
        <div>Post id {JSON.stringify(params)}</div>
    )
}   