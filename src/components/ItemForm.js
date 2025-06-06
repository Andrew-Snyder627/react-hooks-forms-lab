import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  // State for the controlled form inputs
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  // Handler for the name input changes
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Handler for the category select changes
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  // Called when the form gets submitted
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    // Create a new item with a unique ID (uuid)
    const newItem = {
      id: uuid(),
      name: name,
      category: category,
    };

    // Call the function that was passed down from the parent.
    // Lifts the new item up so the parent can add it to the list
    props.onItemFormSubmit(newItem);

    // Reset form input
    setName("");
    setCategory("Produce");
  }

  return (
    // Controlled form. Values and changes are managed by the state
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
        >
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
