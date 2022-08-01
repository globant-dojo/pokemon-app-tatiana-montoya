/* External */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./state/configureStore";

/* Components */
import { Pokemon } from "./Pokemon";

/* Styles */
import "./app.css";

/* Other */
import { PokemonProvider } from "./Pokemon/PokemonProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonProvider>
        <Pokemon />
      </PokemonProvider>
    </Provider>
  </React.StrictMode>
);
