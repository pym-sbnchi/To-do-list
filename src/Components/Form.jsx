import React, { useState } from "react";

export default function Form({ addTodo }) {
  const [newItem, SetNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);

    SetNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Add New Item</label>
        <input
          value={newItem}
          onChange={(e) => SetNewItem(e.target.value)}
          id="item"
          type="text"
          className=""
        />
      </div>
      <button className="btn">ADD</button>
    </form>
  );
}
