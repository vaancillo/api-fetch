const Character = ({ character }) => {
  return (
    <div className='card' style={{ width: '18rem' }} key={character.id}>
      <div className='card-body'>
        <h5 className='card-title'>{character.name}</h5>
        <p className='card-text'>Status: {character.origin.name}</p>
      </div>
      <img src={character.image} className='card-img-top rounded' alt={character.name} />
    </div>

  )
}
export default Character
