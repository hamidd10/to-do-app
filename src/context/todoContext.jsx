import { createContext, useState } from "react";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: "1", text: "I do it1", date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todoText) => {
    const currentDate = new Date();
    setTodos((prev) => [
      ...prev,
      {
        text: todoText,
        id: Date.now().toString(),
        date: currentDate.toLocaleDateString(),
        time: currentDate.toLocaleTimeString(),
      },
    ]);
  };

  const updateTodo = (id, updatedValues) => {
    const currentDate = new Date();
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, text: updatedValues.text, date: currentDate.toLocaleDateString(), time: currentDate.toLocaleTimeString() }
          : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, deleteTodo, addTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
