/* External */
import { screen, render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

/* Components */
import { ListPokemon } from ".";

/* Other */
import { PokemonContext } from "@/PokemonProvider";
import store from "@/state/configureStore";

describe("Tests on <ListPokemon />", () => {
  const onEditPokemon = jest.fn();
  const pokemons = [
    {
      id: 10,
      name: "Ratataa",
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png",
      attack: 250,
      defense: 50,
    },
    {
      id: 11,
      name: "Ratataa",
      image:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png",
      attack: 250,
      defense: 50,
    },
  ];

  const renderListPokemon = (statusGetPokemons, pokemons = []) =>
    render(
      <Provider store={store}>
        <PokemonContext.Provider value={{ POKEMON_MESSAGES: {} }}>
          <ListPokemon
            statusGetPokemons={statusGetPokemons}
            pokemons={pokemons}
            onEditPokemon={onEditPokemon}
          />
        </PokemonContext.Provider>
      </Provider>
    );

  test("it should display 'Cargando...' when is initState", () => {
    renderListPokemon("initState");

    expect(screen.findByText("Cargando...")).toBeTruthy();
  });

  test("it should display 'No se encontraron resultados' when is succeedState", () => {
    renderListPokemon("succeedState");

    expect(screen.findByText("No se encontraron resultados")).toBeTruthy();
  });

  test("it should display 'Hubo un error en la carga' when is failedState", () => {
    renderListPokemon("failedState");

    expect(screen.findByText("Hubo un error en la carga")).toBeTruthy();
  });

  test("it should display 'Hubo un error en la carga' when is failedState", () => {
    renderListPokemon("failedState");

    expect(screen.findByText("Hubo un error en la carga")).toBeTruthy();
  });

  test("it should display the list when pokemons loaded", () => {
    renderListPokemon("succedState", pokemons);

    expect(screen.getAllByRole("img").length).toBe(pokemons.length);
  });

  test("it should call onEditPokemon when click on icon-edit", () => {
    renderListPokemon("succedState", pokemons);

    const span = screen.getAllByRole("icon-edit")[0];

    fireEvent.click(span);

    expect(onEditPokemon).toHaveBeenCalled();
  });

  test("it should match with the snapshot", () => {
    const { container } = renderListPokemon("succedState", pokemons);

    expect(container).toMatchSnapshot();
  });
});
