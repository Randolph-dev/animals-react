import React from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";



const CategoryPage = ({removeCard, removeLikes, addLikes, ...rest}) => {
  const { category } = useParams();
  
 const categoryItems = rest[category];
  return (
    <>
      <h2>{category}</h2>
      {categoryItems.map((item)=>{
        return <Card 
        key = {item.name} 
        name={item.name} 
        likes={item.likes}
        removeCard={()=>removeCard(item.name, category)} 
        removeLikes={()=>removeLikes(item.name, category, 'remove')} 
        addLikes={()=>addLikes(item.name, category, 'add')}
        />;
      })}
    </>
  );
};

export default CategoryPage;