import { useState } from "react";
import "./App.css";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function addTodo(todo) {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    // add the todo to the list
    setList([...list, newTodo]);

    //clear input field
    setInput("");
  }
  function deleteTodo(id) {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
