import React from "react";
import { Link } from "react-router-dom";

const Todos = ({ userId }) => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const getUserTodo = async () => {
      const todo = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      );
      const json = await todo.json();
      setTodos(json);
    };
    getUserTodo();
  }, []);
  return (
    <div className="todos">
      <div className="back">
        <Link to="/">Назад</Link>
      </div>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};

export default Todos;
