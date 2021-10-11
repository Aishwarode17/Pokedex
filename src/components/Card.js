import React from 'react'
import './Card.css'

export default function Card({num,content}) {

  

    return (
            <div className="card">
            <img className="pic" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`} 
            alt="Robotimg" />
            <p>{content.name}</p>
            {/* <p><a href={(content.url)} target="_blank" rel="noreferrer">More Info</a></p> */}
        </div>
    )
}

