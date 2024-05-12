import { useState } from 'react';
import './App.css';
import { animals, insects, fishes, birds } from './assets/animalsList';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Card from './Components/Card.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    { 
      path:'/', 
      element: <Root />,
      errorElement: <ErrorPage/>,
      children: [
        { path: '/animals', element: <Animals /> },
        { path:'/about', element: <Insects/>},
        { path:'/fishes', element: <Fishes/>},
        { path:'/birds', element: <Birds/>},
  ],
},
]);

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
    <RouterProvider router={router} />;
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