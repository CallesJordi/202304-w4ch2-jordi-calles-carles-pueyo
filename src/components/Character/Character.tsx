import { type CharacterStructure } from "../types";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: { name, height, mass, created },
}: CharacterProps): JSX.Element => {
  return (
    <>
      <div className="card">
        <h1 className="card__title">{name}</h1>
        <img className="card__image" src="ruta-de-la-imagen.jpg" alt={name} />
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
