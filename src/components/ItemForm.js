import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [formInput, setFormInput]= useState({
    id: uuid(),
    name: "",
    category: "Produce",
  })

  function formSubmit(e){
    e.preventDefault()
    props.onItemFormSubmit(formInput)
  }

  function onInputChange(e){
    const key = e.target.id
    setFormInput({...formInput, [key]:e.target.value})
  }

  return (
    <form className="NewItem" onSubmit={formSubmit}>
      <label>
        Name:
        <input type="text" name="name" id="name" onChange={onInputChange} />
      </label>

      <label>
        Category:
        <select id="category" name="category" value={formInput.category} onChange={onInputChange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
