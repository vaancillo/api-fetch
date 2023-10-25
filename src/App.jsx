import { useEffect } from 'react'
import './App.css'

function App () {

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      console.log(data)
    }
  }, [])
  return (
    <h1>
      hello world
    </h1>
  )
}

export default App
