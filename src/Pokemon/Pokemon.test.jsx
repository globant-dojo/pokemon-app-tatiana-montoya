/* External */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

/* Components */
import { Pokemon } from ".";

/* Other */
import { PokemonContext } from "@/Pokemon/PokemonProvider";
import store from "@/state/configureStore";

describe("Tests on TopBar", () => {
  const renderPokemonApp = () =>
    render(
      <Provider store={store}>
        <PokemonContext.Provider value={{ POKEMON_MESSAGES: {} }}>
          <Pokemon />
        </PokemonContext.Provider>
      </Provider>
    );

  test("it should match with the snapshot", () => {
    const { container } = renderPokemonApp();

    expect(container).toMatchSnapshot();
  });
});
