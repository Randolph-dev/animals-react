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

  // const removeCard = (animal)=>{
  //   const updatedArray = animalsData.filter((item)=>item.name !== animal);
  //   setAnimalsData(updatedArray);
  // };

  // const likesHandler = (animal, action) => {
  //  const updatedArray = animalsData.map(item=>{
  //   if(item.name === animal){
  //     if(action === 'add'){
  //       return {...item, likes: item.likes +1 };
  //     }else{
  //       return {...item, likes: item.likes -1 };
  //     }
  //   }else{
  //     return item;
  //   }
  //  });
  //  setAnimalsData(updatedArray);
  // };

  // const removeCard = (animal)=>{
  //   const updatedArray = animalsData.filter((item)=>item.name !== animal);
  //   setAnimalsData(updatedArray);
  // };
  

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: <Root />,
     errorElement: <ErrorPage />,
      children: [
        { path: ":category", 
        element: (
        <CategoryPage 
        addLikes={likesHandler} 
        removeLikes={likesHandler} 
        removeCard={removeHandler}
         {...zoo} 
         /> 
  ),
        },
        {path: ':category/:name', element: <SinglePage {...zoo} />},
        { path: "/About", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;