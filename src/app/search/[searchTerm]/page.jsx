import Results from '@/components/Results'

const API_KEY = '7e7a533696242d732af58fdb723908c2'
export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`,
  )

  if (!res.ok) {
    throw new Error('Error fetching data')
  }
  N
  const data = await res.json()

  const results = data.results
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  )
}
