/* Components */
import { render, screen } from "@testing-library/react";
import { Input } from ".";

describe("Tests on <Input />", () => {
  const placeholderText = "Buscar";
  test("it should display a placeholder when received it", () => {
    render(<Input placeholderText={placeholderText} />);

    expect(screen.getByPlaceholderText(placeholderText)).toBeTruthy();
  });

  test("it should match with the snapshot", () => {
    const { container } = render(<Input placeholderText={placeholderText} />);

    expect(container).toMatchSnapshot();
  });
});
