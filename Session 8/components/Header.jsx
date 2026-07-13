import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <h2>Insta Share</h2>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>

        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;