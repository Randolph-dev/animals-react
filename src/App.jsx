import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import CategoryPage from "./routes/CategoryPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import { animals, birds, insects,fishes } from "./assets/animalsList.js";
import SinglePage from "./routes/SinglePage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });
  

  const likesHandler = (name, category, action)=>{
   setZoo((prevZoo) => ({
    ...prevZoo,
    [category] : prevZoo[category].map((el) =>(el.name === name 
      ? {...el, likes: el.likes + (action === 'add' ? 1 : -1)}
      : el
      )),
   }));
  };
  const removeHandler = (name, category)=>{
    setZoo((prevZoo)=>({
      ...prevZoo,
      [category] : prevZoo[category].filter(el => el.name !==name),
    }))
  };

  const router = createBrowserRouter([
   
    {path: '/', element: <Home />},
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {path: ':category', element: 
        <CategoryPage 
         
        addLikes={likesHandler} 
        removeLikes={likesHandler} 
        removeCard ={removeHandler} 
        {...zoo} 
        />
        ,
        },
         {path: '/about', element:<About/>},
        {
          path:":category/:name",
          element:<animalsList {...zoo} />
        },
        {
          path: "/:category/:name", 
          element: <SinglePage {...zoo} />
        },

      ]
    }
  ]);
  return <RouterProvider router= {router} />;
}

export default App;