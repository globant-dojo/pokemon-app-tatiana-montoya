/* External */
import React from "react";
import ReactDOM from "react-dom/client";

/* Components */
import { PokemonApp } from "./PokemonApp";

/* Styles */
import "./main.css";

/* Other */
import { PokemonProvider } from "./PokemonProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokemonProvider>
      <PokemonApp />
    </PokemonProvider>
  </React.StrictMode>
);
