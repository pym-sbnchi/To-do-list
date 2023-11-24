import React from "react";

export default function List({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length == 0 && "Nothing listed"}
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                checked={todo.completed}
              />
              {todo.title}
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
