import { type CharacterStructure } from "../types";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: { id, name, height, mass, created },
}: CharacterProps): JSX.Element => {
  return (
    <>
      <div className="card">
        <h3 className="card__title">{name}</h3>
        <img
          className="card__image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={name}
        />
        <div className="card__info">
          <span className="card__info-item">Height: {height}</span>
          <span className="card__info-item">Mass: {mass}</span>
          <span className="card__info-item">Creation Date: {created}</span>
        </div>
      </div>
    </>
  );
};

export default Character;
