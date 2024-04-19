import { useState } from 'react';
import './App.css';
import { animals } from './assets/animalsList';
import { insects } from './assets/animalsList';
import { fishes } from './assets/animalsList';
import { birds } from './assets/animalsList';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';

function Cards() {
  const [cards, setCards] = useState('');
  const [cardData, setCardData] = useState({
    animals: ' ',
    birds: ' ',
    fishes: ' ',
    insects: ' ',
  })
}

function App() {
  return (
    <>
    <Header />
    <main>
        {animals.map((animal) => (
          <Card key={animal.name} {...animal} />
        ))}
    </main>
    <Footer />
    </>
  );

}

export default App;