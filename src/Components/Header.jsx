import { Link, NavLink} from 'react-router-dom';
import './css/header.css';


const Header = () => {
    return (
      <header>
  <h1>Welcome to the Animal Zoo!</h1>
  <nav>
    <ul>
      <li>
        <NavLink to ="/">Home</NavLink>
      </li>
      <li>
        <NavLink to ="/animals">Animals</NavLink>
      </li>
      <li>
        <NavLink to ="/birds">Birds</NavLink>
      </li>
      <li>
        <NavLink to ="/insects">Insects</NavLink>
      </li>
      <li>
        <NavLink to ="/fishes">Fishes</NavLink>
      </li>
      <li>
        <NavLink to ="/about">About</NavLink>
      </li>
    </ul>
  </nav>
  
      </header>
      
    );
  };
  
  export default Header;