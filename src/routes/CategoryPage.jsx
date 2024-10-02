import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import '../Components/css/categorypage.css'

const CategoryPage = ({ removeCard, removeLikes, addLikes, ...rest }) => {
  const { category } = useParams();
  const categoryItems = rest[category] || [];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = categoryItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="category-page-container">
      <h2>{category.charAt(0).toUpperCase() +category.slice(1)}</h2> 
      <input
        className="searchAnimal"
        type="text"
        placeholder={`Search ${category}`}
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="card-container">
        {filteredItems.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            category={category} 
            likes={item.likes}
            removeCard={() => removeCard(item.name, category)}
            removeLikes={() => removeLikes(item.name, category, "remove")}
            addLikes={() => addLikes(item.name, category, "add")}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;