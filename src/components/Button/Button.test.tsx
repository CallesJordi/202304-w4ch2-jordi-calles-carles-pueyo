import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component ", () => {
  describe("When it receives a 'X'", () => {
    test("Then it should show a 'X' inside the button", () => {
      const expectedText = "X";
      const expectedAction = jest.fn();

      render(<Button text={expectedText} actionOnClick={expectedAction} />);

      const button = screen.getByRole("button");

      expect(button).toHaveTextContent(expectedText);
    });
  });
});
