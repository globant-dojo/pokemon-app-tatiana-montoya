/* External */
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

/* Components */
import { TopBar } from ".";

/* Other */
import { PokemonContext } from "@/Pokemon/PokemonProvider";
import store from "@/state/configureStore";

describe("Tests on TopBar", () => {
  const setOpenModal = jest.fn();
  const onSearchPokemons = jest.fn();

  const renderTopBar = () =>
    render(
      <Provider store={store}>
        <PokemonContext.Provider value={{ POKEMON_MESSAGES: {} }}>
          <TopBar
            setOpenModal={setOpenModal}
            onSearchPokemons={onSearchPokemons}
          />
        </PokemonContext.Provider>
      </Provider>
    );

  test("it should call the setOpenModal when clicked on 'Nuevo'", () => {
    renderTopBar();

    const button = screen.getByRole("button", { name: "btn-new" });

    fireEvent.click(button);

    expect(setOpenModal).toHaveBeenCalled();
    expect(setOpenModal).toHaveBeenCalledTimes(1);
  });

  test("it should match with the snapshot", () => {
    const { container } = renderTopBar();

    expect(container).toMatchSnapshot();
  });
});
