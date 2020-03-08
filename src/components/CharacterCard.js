import React from 'react';



const CharacterCard = (props) => {

console.log(props)

  return(

    <div className="charCard">
    {props.character.map((char) => {
      return(<ul className="charInfo">
      <li>Name: {char.name}</li>
      <li>Height: {char.height}</li>
      <li>Mass: {char.mass}</li>
      <li>Skin: {char.skin_color}</li>
      <li>Hair: {char.hair_color}</li>
      <li>Eyes: {char.eye_color}</li>
      <li>DOB: {char.birth_year}</li>
      <li>Gender: {char.gender}</li>
      </ul>
    )
    })}

    </div>
  )

}

export default CharacterCard
