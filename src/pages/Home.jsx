import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const getUsers = async () => {
      const users = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await users.json();
      setUsers(json);
    };
    getUsers();
  }, []);

  return (
    <div className="home">
      {users.map((user) => (
        <Link to={`/todo/${user.id}`} key={user.id}>
          {user.name}
        </Link>
      ))}
    </div>
  );
};
export default Home;
