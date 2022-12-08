import { useEffect, useState } from "react";
import { getUsers } from "../util/api";

const UserControls = ({ activeUser, setActiveUser }) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p>page is loading...</p>
  ) : (
    <ul className="users-container">
      {users.map((user, index) => {
        return (
          <li className="users--card" key={index}>
            <h2 className="users--title">{user.username}</h2>
            <img
              className="users--avatar"
              src={user.avatar_url}
              alt={user.name}
            />
            <button onClick={() => {setActiveUser(user)}}>Sign in</button>
          </li>
        );
      })}
    </ul>
  );
};

export default UserControls;
