import React from 'react'
import Card from './Card'
import './CardList.css'

export default function CardList({pokemon}) {

    // let url = pokemon.sprites["front_default"];
    // console.log(pokemon.sprites.other["official-artwork"]["front_default"]);
    // key = pokemon.results
    // console.log(pokemon.results);

    

    return (<div className='container'>
        <div className="check">
            {pokemon.results.map((content, index)=>{
                
                return <Card num ={content.url.split('/')[content.url.split('/').length -2]} content={content} key={index}></Card>
                
                })}
         
        </div>
        </div>
    )
}
