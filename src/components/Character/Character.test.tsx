import { render, screen } from "@testing-library/react";
import Character from "./Character";
import { CharacterStructure } from "../types";

describe("Given a Character component", () => {
  describe("When receives a character 'Luke Skywalker'", () => {
    const luke: CharacterStructure = {
      id: 1,
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      created: "444",
    };
    const expectedName = "Luke Skywalker";

    test("Then it should show the name 'Luke Skywalker' in a h2", () => {
      render(<Character character={luke} />);
      const element = screen.getByRole("heading");

      expect(element).toHaveTextContent(expectedName);
    });

    test("Then it should show the character 'Luke Skywalker'", () => {
      render(<Character character={luke} />);
      const element = screen.getByText(expectedName);

      expect(element).toBeInTheDocument();
    });
  });
});
