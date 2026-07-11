import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/usersSlice";

const UsersList = () => {
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  if (users.length === 0) {
    return <p className="empty-list">დარეგისტრირებული მომხმარებელი არ არის</p>;
  }

  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.email} className="user-item">
          <span>
            {user.name} — {user.email} — {user.age} წლის
          </span>
          <button onClick={() => dispatch(removeUser(user.email))}>
            წაშლა
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
