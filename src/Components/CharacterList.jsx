import { useEffect, useState } from 'react'
import Character from './Character'
import Spinner from './Spinner'

function NavPage ({ page, setPage }) {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <p>Page: {page}</p>
      <button
        className='btn btn-primary btn-sm'
        onClick={() => setPage(page + 1)}
      >
        Page: {page + 1}
      </button>
    </header>
  )
}

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData () {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await res.json()
      setLoading(false)
      setCharacters(data.results)
    }
    fetchData()
  }, [page])
  // if (loading) {
  //   return <Spinner />
  // }
  return (
    <div className='container'>
      <NavPage page={page} setPage={setPage} />
      {
        loading
          ? (
            <Spinner />
            )
          : (

            <div className='row row-cols-4 gap-3 justify-content-center'>
              {characters.map((character) => {
                return (
                  <div key={character.id} className='col'>
                    <Character character={character} />
                  </div>
                )
              })}
            </div>

            )
}             <NavPage page={page} setPage={setPage} />
    </div>
  )
}
export default CharacterList
