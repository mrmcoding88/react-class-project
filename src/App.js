import "./App.css";
import Logo from "./Logo";
import BestPokemone from "./BestPokemon";
import CaughtPokemon from "./CaughPokemon";

function App() {
  const appName = "Pokedex";
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <Logo appName={appName} />
      <BestPokemone abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
