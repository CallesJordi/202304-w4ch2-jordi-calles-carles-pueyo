import { useEffect, useState } from "react";
import { type CharacterStructure } from "../types";
import Character from "../Character/Character";

const apiUrl = "http://localhost:4000/characters";

const App = (): JSX.Element => {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(apiUrl);
      const charactersApi = (await response.json()) as CharacterStructure[];
      loadCharacters(charactersApi);
    })();
  }, []);

  const loadCharacters = (characterList: CharacterStructure[]): void => {
    setCharacters(characterList);
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Star Wars</h1>
      </header>
      <main className="main">
        <ul className="characters">
          {characters.map((character) => (
            <li key={character.id}>
              <Character character={character} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
