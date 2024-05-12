import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header>
        <h1>Animal Zoo</h1>    
        <nav>
            <ul>
                <li><Link to='/'>Welcome to the Animal Zoo!</Link>
                <li><Link to='/Animals'>Animals</Link></li>   
                <li><Link to='/Birds'>Birds</Link></li>                     
                <li><Link to='/Fishes'>Fishes</Link></li>                     
                <li><Link to='/Insects'>Insects</Link></li>                     
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;