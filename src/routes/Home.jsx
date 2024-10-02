import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Components/css/home.css';
import { fetchAnimalImage } from '../utils/imageService';  

const Home = () => {
  const categories = [
    { name: "Animals", path: "/animals" },
    { name: "Birds", path: "/birds" },
    { name: "Insects", path: "/insects" },
    { name: "Fishes", path: "/fishes" },
  ];

  const [categoryImages, setCategoryImages] = useState({});

  useEffect(() => {
    categories.forEach((category) => {
      fetchAnimalImage(category.name.toLowerCase(), 400).then((url) => {
        setCategoryImages((prevState) => ({
          ...prevState,
          [category.name]: url,
        }));
      });
    });
  }, []);

  return (
    <div className="home-container">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.path}
          className="category-link"
          style={{
            backgroundImage: `url(${categoryImages[category.name] || 'https://via.placeholder.com/400'})`  
          }}
        >
          <div className="category-name">{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Home;