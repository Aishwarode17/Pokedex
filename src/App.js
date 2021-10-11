import { Component } from 'react';
import './App.css';
import React from 'react'
import CardList from './components/CardList';
import Refresh from './components/Refresh';
import Footer from './components/Footer';

class App extends Component{

  constructor(){
    super();
    this.state = {
      pokemon:[],
      searchvalue:"",
  }

  
}
  

  componentDidMount(){
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${11}`).then(response =>{ return response.json()})
    .then(poke => { 
      this.setState({pokemon:poke})} );
  }

  clicked = (event)=>{
    let url = this.state.pokemon.next;
    fetch(url).then(response =>{ return response.json()})
    .then(poke => { 
      this.setState({pokemon:poke}) } );
  }
  
 


  render(){
    
    if(this.state.pokemon.length===0){
      return (
        <h1>loading</h1>
      )
    }
    else{
    return(
    <div  >
        <h1 style={{textAlign:'center'}}>Pokedex</h1>
        
        <Refresh clicked={this.clicked}  ></Refresh>

        <CardList pokemon = {this.state.pokemon}></CardList>  
        <Footer></Footer>
    </div>
    );
    }


  }
}


export default App;
