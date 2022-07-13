/* External */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

/* Components */
import { PokemonApp } from "./PokemonApp";

/* Other */
import { PokemonContext } from "@/PokemonProvider";
import store from "@/state/configureStore";

describe("Tests on TopBar", () => {
  const renderPokemonApp = () =>
    render(
      <Provider store={store}>
        <PokemonContext.Provider value={{ POKEMON_MESSAGES: {} }}>
          <PokemonApp />
        </PokemonContext.Provider>
      </Provider>
    );

  test("it should match with the snapshot", () => {
    const { container } = renderPokemonApp();

    expect(container).toMatchSnapshot();
  });
});
