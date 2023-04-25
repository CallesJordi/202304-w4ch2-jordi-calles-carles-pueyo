import { type CharacterStructure } from "../types";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  name,
  height,
  mass,
  created,
}: CharacterStructure): JSX.Element => {
  return (
    <>
      <li>
        <div className="starwars__picture-container">
          <img className="starwars__picture" src="" alt="" />
        </div>
        <div className="starwars__data-container">
          <h2 className="starwars__name">{name}</h2>
          <ul className="starwars__data-list">
            <li className="starwars__data">
              <span className="starwars-height">Height: {height}</span>
            </li>
            <li className="starwars__data">
              <span className="starwars-weight">Weight: {mass}</span>
            </li>
            <li className="starwars__data">
              <span className="starwars__creation">Creation: {created}</span>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default Character;
