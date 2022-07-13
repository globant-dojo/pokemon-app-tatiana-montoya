/* External */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

/* Componentes */
import { ModalConfirmation } from ".";

/* Other */
import { PokemonContext } from "@/PokemonProvider";

describe("Tests on <ModalConfirmation />", () => {
  const message = "Prueba";
  const setOpenModal = jest.fn();
  const handleConfirmed = jest.fn();

  const renderModalConfirmation = () =>
    render(
      <PokemonContext.Provider value={{ POKEMON_MESSAGES: {} }}>
        <ModalConfirmation
          message={message}
          setOpenModal={setOpenModal}
          handleConfirmed={handleConfirmed}
        />
      </PokemonContext.Provider>
    );

  test("it should show the message", () => {
    renderModalConfirmation();

    expect(screen.findByText(message)).toBeTruthy();
  });

  test("it should call the setOpenModal when clicked on cancel", () => {
    renderModalConfirmation();

    const button = screen.getByRole("button", { name: "btnCancel" });

    fireEvent.click(button);

    expect(setOpenModal).toHaveBeenCalled();
    expect(setOpenModal).toHaveBeenCalledTimes(1);
  });

  test("it should call the handleConfirmed when clicked on confirm", () => {
    renderModalConfirmation();

    const button = screen.getByRole("button", { name: "btnConfirm" });

    fireEvent.click(button);

    expect(handleConfirmed).toHaveBeenCalled();
    expect(handleConfirmed).toHaveBeenCalledTimes(1);
  });

  test("it should match with the snapshot", () => {
    const { container } = renderModalConfirmation();

    expect(container).toMatchSnapshot();
  });
});
