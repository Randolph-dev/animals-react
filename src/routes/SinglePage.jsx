import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { animals, birds, insects, fishes } from '../assets/animalsList.js'; 
import Card from '../Components/Card.jsx';

const SinglePage = () => {
  const { name } = useParams();

  const allAnimals = [...animals, ...birds, ...insects, ...fishes]; 

  const animal = allAnimals.find(animal => animal.name === name); 

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <div>
      <Card
        name={animal.name}
        category={animal.category}
      />
      <br />
      <Link to="/animals" className="btn-go-back">Go Back</Link>
    </div>
  );
};

export default SinglePage;
