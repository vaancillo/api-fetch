import { useEffect, useState } from 'react'
import Character from './Character'
import Spinner from './Spinner'

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData () {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      setLoading(false)
      setCharacters(data.results)
    }
    fetchData()
  }, [])
  // if (loading) {
  //   return <Spinner />
  // }
  return (
    <div className='container'>
      {
        loading
          ? (
            <Spinner />
            )
          : (

            <div className='row'>
              {characters.map((character) => {
                return (
                  <div key={character.id} className='col-md-4'>
                    <Character character={character} />
                  </div>
                )
              })}
            </div>

            )
}
    </div>
  )
}
export default CharacterList
