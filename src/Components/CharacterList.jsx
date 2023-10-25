import { useEffect, useState } from 'react'
import Character from './Character'

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    async function fetchData () {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      setCharacters(data.results)
    }
    fetchData()
  }, [])
  return (
    <div>
      {characters.map((character) => {
        return (
          <Character key={character.id} character={character} />
        )
      })}
    </div>
  )
}
export default CharacterList
