import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch]=useState("")

  const searchBar = items.filter((item)=>{
    return  item.name.toLowerCase().includes(search.toLowerCase())
    })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const itemsToDisplay = searchBar.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function mySearch(newArr){
    setSearch(newArr)
  }
  function inputItem(newItem){
    const updatedItem=[...itemsToDisplay,newItem]
    setItems(updatedItem)
  }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={inputItem} />
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={mySearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
