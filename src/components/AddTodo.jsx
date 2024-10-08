import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const {addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
  };
  return (
    <div >
    <form onSubmit={handleSubmit} className="main-div">
      <div className="main-input">
        <input
        placeholder="Enter Task"
          className="sub-input"
          value={input}
          name="input"
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
      </div>
      <button className="button-add">Add</button>
    </form>

    </div>

  );
};

export default AddTodo;
