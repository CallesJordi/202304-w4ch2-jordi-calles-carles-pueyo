import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'Star Wars", () => {
      const expectedText = "Star Wars";

      render(<App />);

      const text = screen.getByRole("heading");

      expect(text).toHaveTextContent(expectedText);
    });
  });
});
