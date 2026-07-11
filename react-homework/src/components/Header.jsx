import { useSelector } from "react-redux";
import "./Header.css";

export const Header = () => {
  const usersCount = useSelector((state) => state.users.list.length);

  return (
    <header>
      <h1>მომხმარებლების რეგისტრაცია</h1>
      <p className="users_length">
        დარეგისტრირებულია: {usersCount}მომხმარებელი.
      </p>
    </header>
  );
};
