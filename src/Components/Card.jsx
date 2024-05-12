import React, { useState } from 'react';

const Card = ({ name, addLikes, removeLikes, removeImage }) => {
    const capitalizedLetters = name.charAt(0).toUpperCase() + name.slice(1);
    const [likeCounter, setLikeCounter] = useState(0);

    const handleAddLikes = () => {
        setLikeCounter(likeCounter + 1);
        addLikes();
    };

    const handleRemoveLikes = () => {
        setLikeCounter(likeCounter - 1);
        removeLikes();
    };

    const handleRemoveImage = () => {
        removeImage(name);
    };

    return (
        <div className='card'>
            <h2>{capitalizedLetters}</h2>
            <img src={`https://source.unsplash.com/random/200x200/?${name}`} alt={capitalizedLetters} />
            <br />
            <button className='likes' alt="likes" onClick={handleAddLikes}>Add Likes</button>
            <button className='dislikes' alt="dislikes" onClick={handleRemoveLikes}>Remove Likes</button>
            <button className='removeImage' alt="removeImage" onClick={handleRemoveImage}>Remove Image</button>
            <p>Number of likes: {likeCounter} </p>
        </div>
    );
};

export default Card;