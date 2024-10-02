import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SinglePage = ({ zoo }) => {  
  const { category, name } = useParams(); 

  const categoryData = zoo[category];

  if (!categoryData) {
    return <div>Category not found</div>;  
  }

  const animal = categoryData.find(animal => animal.name === name);

  if (!animal) {
    return <div>Animal not found</div>; 
  }

  return (
    <div>
      <h2>{animal.name}</h2>
      <img src={`https://source.unsplash.com/random/400x400/?${name}`} alt={animal.name} />
      <p>Category: {category}</p>
      <p>Likes: {animal.likes}</p>
      <Link to={`/${category}`} className="btn-go-back">Go Back</Link>
    </div>
  );
};

export default SinglePage;