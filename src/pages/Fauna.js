import React from 'react';
import '../styles/hewan.css';
import harimau from '../assets/harimau-sumatera.jpg';
import singa from '../assets/Singa-afr.jpg';
import beruang from '../assets/beruang-madu.jpg';

const AnimalList = () => {
  const animals = [
    { id: 1, name: 'Harimau Sumatera', description: 'Harimau sumatera (Panthera tigris sumatrae) adalah subspesies harimau yang habitat aslinya di pulau Sumatera. memiliki ciri kulit loreng coklat kekuning-kuningan dengan garis-garis hitam vertikal dari kepala sampai ekor.', image: harimau },
    { id: 2, name: 'Singa Afrika', description: 'Singa adalah hewan karnivora yang hidup di Afrika.', image: singa },
    { id: 3, name: 'Beruang Madu', description: 'Beruang madu (Helarctos malayanus) memiliki seluruh tubuh berwarna hitam mengkilap, ekor sangat pendek, moncong abu­-abu. Dada atas ada bercak putih kekuningan membentuk huruf “V” atau “C”.', image: beruang },
  ];

  return (
    <div className="animal-list-container">
      <h2 align="center" class="hewan-heading">MAMALIA </h2>
      <br></br>
      <ul className="animal-list">
        {animals.map(animal => (
          <li key={animal.id} className="animal-item">
            <img src={animal.image} alt={animal.name} className="animal-image" />
            <div className="animal-info">
              <a href={`/animals/${animal.id}`} className="animal-link">
                {animal.name}
              </a>
              <p className="animal-description">{animal.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
