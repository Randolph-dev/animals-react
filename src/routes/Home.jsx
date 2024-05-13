import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/css/home.css';

const Home = () => {
  return (
    <div>
      <Link to="/animals">Animals</Link>
      <Link to="/birds">Birds</Link>
      <Link to="/insects">Insects</Link>
      <Link to="/fishes">Fishes</Link>

    </div>
  );
};

export default Home;