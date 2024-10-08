import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useContext(TodoContext);
  const [isVisible, setVisible] = useState(false);
  const [title, setTitle] = useState(todo.text);

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    updateTodo(todo.id, { text: title });
    setVisible(false);
  };

  return (
    <div className="container">
      <li className="list">
        {isVisible ? (
          <form onSubmit={handleUpdateTodo} className="form">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="form-input"
            />
            <button type="submit" className="update">Update</button>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="cancel"
            >
              Cancel
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-x-2">
            <h2>{todo.text}</h2>
            <p className="text-sm text-gray-500">{`Created on: ${todo.date} at ${todo.time}`}</p>
            <button
              onClick={() => setVisible(true)}
              className="edit-button"
            >
              Edit
            </button>
          </div>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-400 p-2 rounded-md text-teal-50"
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
