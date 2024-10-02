import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAnimalImage } from '../utils/imageService'; 

const SinglePage = ({ zoo }) => {
  const { category, name } = useParams(); 
  const [imageUrl, setImageUrl] = useState('');  
  const [loading, setLoading] = useState(true);  
  const categoryData = zoo[category];

  if (!categoryData) {
    return <div>Category not found</div>;  
  }

  const animal = categoryData.find(animal => animal.name === name);

  if (!animal) {
    return <div>Animal not found</div>; 
  }

  useEffect(() => {
    fetchAnimalImage(name).then((url) => {
      setImageUrl(url);  
      setLoading(false);  
    });
  }, [name]);

  return (
    <div>
      <h2>{animal.name}</h2>
      {loading ? (  
        <p>Loading image...</p>
      ) : (
        <img src={imageUrl} alt={animal.name} />
      )}
      <p>Category: {category}</p>
      <p>Likes: {animal.likes}</p>
      <Link to={`/${category}`} className="btn-go-back">Go Back</Link>
    </div>
  );
};

export default SinglePage;