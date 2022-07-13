/* External */
import { fireEvent, render, screen } from "@testing-library/react";

/* Components */
import { Input } from ".";

describe("Tests on <Input />", () => {
  const placeholderText = "Buscar";
  const size = 100;
  const onChange = jest.fn();
  const iconName = "icon-search";

  const renderInput = () =>
    render(
      <Input
        placeholderText={placeholderText}
        size={size}
        iconName={iconName}
        onChange={onChange}
      />
    );

  test("it should display a placeholder when it receives it", () => {
    renderInput();

    expect(screen.getByPlaceholderText(placeholderText)).toBeTruthy();
  });

  test("it should display a span when it receives an iconName", () => {
    const { container } = renderInput();

    expect(container.getElementsByClassName(iconName)).toBeTruthy();
  });

  test("it shouldnt display a span when it doesnt receive an iconName", () => {
    const { container } = render(
      <Input
        placeholderText={placeholderText}
        size={size}
        onChange={onChange}
      />
    );

    expect(container.getElementsByClassName(iconName).length).toBe(0);
  });

  test("it should change the value in the input when write in", () => {
    renderInput();

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Pikachu" } });

    expect(input.value).toBe("Pikachu");
  });

  test("it should match with the snapshot", () => {
    const { container } = renderInput();

    expect(container).toMatchSnapshot();
  });
});
