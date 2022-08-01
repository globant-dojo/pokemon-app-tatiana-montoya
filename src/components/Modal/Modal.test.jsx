/* External */
const { render } = require("@testing-library/react");
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";

/* Components */
import { Modal } from ".";

describe("Tests on <Modal />", () => {
  test("it should match with the snapshot", () => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });
    const { container } = render(<Modal>test</Modal>);
    expect(container).toMatchSnapshot();
  });
});
