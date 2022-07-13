/* External */
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";

/* Components */
import { PokemonForm } from ".";

/* Other */
import { PokemonContext } from "@/PokemonProvider";
import store from "@/state/configureStore";

const setOpenModal = jest.fn();
const pokemonToEdit = {};
const clearPokemon = jest.fn();

const renderPokemonForm = () =>
  render(
    <Provider store={store}>
      <PokemonContext.Provider value={{ POKEMON_MESSAGES: {} }}>
        <PokemonForm
          setOpenModal={setOpenModal}
          pokemonToEdit={pokemonToEdit}
          clearPokemon={clearPokemon}
        />
      </PokemonContext.Provider>
    </Provider>
  );

describe("Tests on <PokemonForm />", () => {
  test("it should call the setOpenModal when clicked on cancel", () => {
    renderPokemonForm();

    const button = screen.getByRole("button", { name: "btn-cancel" });

    fireEvent.click(button);

    expect(setOpenModal).toHaveBeenCalled();
    expect(setOpenModal).toHaveBeenCalledTimes(1);
    expect(clearPokemon).toHaveBeenCalled();
    expect(clearPokemon).toHaveBeenCalledTimes(1);
  });

  test("it should match wit the snapshot", () => {
    const { container } = renderPokemonForm();

    expect(container).toMatchSnapshot();
  });
});
