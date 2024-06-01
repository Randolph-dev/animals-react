import React, { useState } from 'react';
import { Link } from "react-router-dom"
import '../Components/css/card.css'

const Card = ({ name, addLikes, removeLikes, removeCard }) => {
    const capitalizedLetters = name.charAt(0).toUpperCase() + name.slice(1);
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLikes = (action) => action === 'add' ? setLikeCounter(likeCounter + 1) && addLikes() : setLikeCounter(likeCounter - 1) && removeLikes();

    return (
        <div className='card'>
            <h2>{capitalizedLetters}</h2>
            <div className='image-container'>
                <img src={`https://source.unsplash.com/random/200x200/?${name}`} alt={capitalizedLetters} className='card-image'/>
                <button className='btn-close' alt="removeImage" onClick={removeCard}></button>
            </div>
            <br />
            <button className='likes' alt="likes" onClick={() => handleLikes('add')}>
                <span className="material-symbols-outlined minus-btn">heart_plus</span>
            </button>
            <button className='dislikes' alt="dislikes" onClick={() => handleLikes('remove')}>
                <span className="material-symbols-outlined minus-btn">heart_minus</span>
            </button>
            <p>Number of likes: {likeCounter} </p>
            <Link
            to={`https://en.wikipedia.org/wiki/${encodeURIComponent(name)}`}
            className="btn-read-more"
            target="_blank"
            rel="noopener noreferrer"
    >
      Read more
    </Link>        
    </div>
    );
};

export default Card;
