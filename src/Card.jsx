import './index.css'

const Card = ({ name }) => {
    const capitalizedLetters = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <div className='card'>
            <h2>{capitalizedLetters}</h2>
            <img src={`https://source.unsplash.com/random/200x200/?${name}`} alt={capitalizedLetters} />
        </div>
    )
}

export default Card;