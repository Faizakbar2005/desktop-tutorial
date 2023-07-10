import React from 'react';
import '../styles/fauna.css';
import harimau from '../assets/harimau-sumatera.jpg';
import singa from '../assets/Singa-afr.jpg';
import beruang from '../assets/beruang-madu.jpg';
import beruk from '../assets/beruk.jpg';
import gorila from '../assets/Gorila.jpg';
import rusa from '../assets/rusa-sulawesi.jpg';

import komodo from '../assets/komodo.jpg';
import kura from '../assets/kura2.jpg';
import cobra from '../assets/cobra.jpg';
import biawak from '../assets/biawak.jpg';
import buaya from '../assets/buaya.jpg';

const AnimalList = () => {
  const animals = [
    { id: 1, name: 'Harimau Sumatera', description: 'Harimau sumatera (Panthera tigris sumatrae) adalah subspesies harimau yang habitat aslinya di pulau Sumatera. memiliki ciri kulit loreng coklat kekuning-kuningan dengan garis-garis hitam vertikal dari kepala sampai ekor.', image: harimau },
    { id: 2, name: 'Singa Afrika', description: 'Singa adalah hewan karnivora yang hidup di Afrika.', image: singa },
    { id: 3, name: 'Beruang Madu', description: 'Beruang madu (Helarctos malayanus) memiliki seluruh tubuh berwarna hitam mengkilap, ekor sangat pendek, moncong abu­-abu. Dada atas ada bercak putih kekuningan membentuk huruf “V” atau “C”.', image: beruang },
    { id: 4, name: 'Beruk', description: 'Beruk (Macaca nemestrina) dewasa jantan dapat mencapai berat badan sampai 5 – 15 kg. Monyet-monyet ini memiliki warna kekuning-kuningan sampai cokelat dengan punggung berwarna lebih gelap dan lebih terang pada tubuh bagian bawahnya.', image: beruk },
    { id: 4, name: 'Gorila', description: 'Gorila adalah jenis primata yang terbesar. Gorila berasal dari hutan tropis di Afrika. 97-98% DNA gorila identik dengan DNA manusia.', image: gorila },
    { id: 4, name: 'Rusa Sulawesi', description: 'The sambar (Rusa unicolor) adalah rusa asli besar ke benua India, Cina selatan dan Asia Tenggara.', image: rusa },
  ];

  const animals2 = [
    { id: 1, name: 'Komodo', description: 'Komodo adalah spesies kadal besar yang ditemukan di pulau-pulau Indonesia Komodo, Rinca, Flores, Gili Motang, dan Padar.', image: komodo },
    { id: 2, name: 'Kura - Kura Pipi Merah', description: 'Kura - Kura Pipi Merah adalah kura-kura semi-aquatic milik keluarga Emydidae. Mereka adalah subspesies dari slider kolam.', image: kura},
    { id: 3, name: 'Ular King Cobra', description: 'King Cobra adalah elapid yang sebagian besar ditemukan di hutan dari India sampai Asia Tenggara. Spesies ini adalah ular berbisa terpanjang di dunia, dengan panjang hingga 18,5-18,8 ft (5,6-5,7 m).', image: cobra },
    { id: 4, name: 'Biawak Hitam', description: 'Black lizard atau Biawak Hitam (Varanus beccarii) adalah anggota yang relatif kecil dari keluarga Varanidae, tumbuh panjangnya menjadi sekitar 90-120 cm (35-47 in).', image: biawak },
    { id: 5, name: 'Buaya', description: 'Buaya adalah reptil bertubuh besar yang hidup di air. Secara ilmiah, buaya meliputi seluruh spesies anggota suku Crocodylidae, termasuk pula buaya sepit (Tomistoma schlegelii). Meski demikian nama ini dapat pula dikenakan secara longgar untuk menyebut ‘buaya’ aligator, kaiman dan gavial; yakni kerabat-kerabat buaya yang berlainan suku.', image: buaya },
  ];

  return (
    <><div className="animal-list-container">
      <h2 align="center" class="hewan-heading">MAMALIA</h2>
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
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h2 align="center" class="hewan-heading">REPTIL</h2>
    <br></br>
    <ul className="animal-list">
        {animals2.map(animal => (
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
      <br></br>
    </>

  );
};

export default AnimalList;
