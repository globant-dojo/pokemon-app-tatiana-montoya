/* External */
import { fireEvent, render, screen } from "@testing-library/react";

/* Componentes */
import { Button } from ".";

describe("Tests on <Button />", () => {
  const children = "Buscar";
  const handleAction = jest.fn();
  const iconName = "icon-search";

  const renderButton = () =>
    render(
      <Button iconName={iconName} handleAction={handleAction}>
        {children}
      </Button>
    );

  test("it should display a span when it receives an iconName", () => {
    const { container } = renderButton();

    expect(container.getElementsByClassName(iconName)).toBeTruthy();
  });

  test("it should display a text when it receives the children", () => {
    renderButton();

    expect(screen.findByText(children)).toBeTruthy();
  });

  test("it should call the onChange when clicked", () => {
    renderButton();

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(handleAction).toHaveBeenCalled();
    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  test("it should match with the snapshot", () => {
    const { container } = renderButton();

    expect(container).toMatchSnapshot();
  });
});
