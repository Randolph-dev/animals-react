import './index.css'

const Card = ({ name }) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <img src={`https://source.unsplash.com/random/400x400/?${name}`} alt={name} />
        </div>
    )
}

export default Card;