const BestPokemone = (props) => {
    const abilities = props.abilities;
    return (
      <div>
        <p>My favorite Pokémon is Squirtle</p>
        <ul>
          {abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default BestPokemone;