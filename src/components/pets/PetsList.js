import React from 'react';
import { Link } from 'react-router-dom';
import petsData from '../data/pets';

function PetsList(props) {
  const animal = props.animal;
  const pets = petsData.filter(pet => pet.type === animal);

  return (
    <div>
      <h1>{`${animal}s`}</h1>
      <ul className="pets-list">
        {pets.map(pet => (
          <li key={pet.id}>
            <h3>{pet.name}</h3>
            <p>{pet.breed}</p>
          </li>
        ))}
      </ul>
      <Link to={`/pets/${animal === 'cat' ? 'dogs' : 'cats'}`}>
        <button>See All {animal === 'cat' ? 'Dogs' : 'Cats'}</button>
      </Link>
    </div>
  );
}

export default PetsList;
