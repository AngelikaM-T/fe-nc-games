import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { getUsers } from "../util/api";

const UserControls = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    });
  }, []);

  const { setActiveUser } = useContext(UserContext);

  return loading ? (
    <p>page is loading...</p>
  ) : (
    <ul className="users-container">
      {users.map((user) => {
        return (
          <li className="users--card" key={user.username}>
            <h2 className="users--title">{user.username}</h2>
            <img
              className="users--avatar"
              src={user.avatar_url}
              alt={user.name}
            />
            <button
              onClick={() => {
                return setActiveUser(user);
              }}
            >
              Sign in
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default UserControls;
