import { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setError(null);
        console.log(
          data.map((user: { name: string }) => user.name),
          data,
          "HEY"
        );
        setUsers(data.map((user: { name: string }) => user.name));
      })
      .catch(() => {
        console.log("ERRROR");
        setError("Error fetching users");
      });
  };
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
