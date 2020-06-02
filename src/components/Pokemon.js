import React from 'react'

const Pokemon = (props) => {
    return (
        <div className="pokemon">

        <div className="pokemon_name"> 
        <p>{props.pokemon.name}</p>
         </div>

        <div className="pokemon_p">
        <span>{props.pokemon.maxHP}</span>
        <span>{props.pokemon.maxCP}</span>
        </div> 

         <div className="pokemon_image">
        <img src={props.pokemon.image} alt="pokemon_img" />
        </div>

        <div className="pokemon_attacks">
        {props.pokemon.attacks.special.splice(0,2).map(attack => 
        <span key= {`${attack.name}-${attack.damage}`}>{attack.name}</span>
        )}
        
        </div> 

        </div>
    )
}

export default Pokemon;
