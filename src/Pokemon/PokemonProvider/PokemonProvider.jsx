/* External */
import React, { useEffect } from "react";
import { useState } from "react";

const PokemonContext = React.createContext();

const PokemonProvider = (props) => {
  const [pokemonMessages, setPokemonMessages] = useState({});
  useEffect(() => {
    fetch("/languages/es.json")
      .then((res) => res.json())
      .then((data) => {
        setPokemonMessages(data);
      });
  }, []);

  return (
    <PokemonContext.Provider value={{ POKEMON_MESSAGES: pokemonMessages }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };
