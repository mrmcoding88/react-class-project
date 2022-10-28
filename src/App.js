
import './App.css';
import React from 'react';

const Logo = () =>{
  return(
    <header>
    <h1>Welcome to the Pokedex</h1>
    <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'></img>
    </header>)
}
 const BestPokemone = ()=>(
 <p>My favorite Pokémon is Squirtle</p>
 )


function App(){
  return (<div>
    <Logo />
  <BestPokemone />
  </div>)
}


export default App;
