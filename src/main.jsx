/* External */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./state/configureStore";

/* Components */
import { PokemonApp } from "./PokemonApp";

/* Styles */
import "./main.css";

/* Other */
import { PokemonProvider } from "./PokemonProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonProvider>
        <PokemonApp />
      </PokemonProvider>
    </Provider>
  </React.StrictMode>
);
