import { useState } from 'react';
import './App.css';
import { animals, insects, fishes, birds } from './assets/animalsList';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';

function App() {

  const [animalsData, setAnimalsData] = useState(animals);

  const removeCard = (animalName) => {
    const updatedArray = animalsData.filter(animal => animal.name !== animalName);
    setAnimalsData(updatedArray);
  };

  const removeLikes = () => {
    console.log('removed likes');
  };
  const addLikes = () => {
    console.log('added likes');
  };

  return (
    <>
    <Header />
    <main>
        {animalsData.map((animal) => (
          <Card key={animal.name} 
          {...animal} 
          removeLikes={() => removeLikes(animal.name, 'remove')} 
          addLikes={ addLikes.bind (this, animal.name, 'add')} 
          removeCard={() => removeCard(animal.name)} />
          ))}

    </main>
    <Footer />
    </>
  );

}
export default App;