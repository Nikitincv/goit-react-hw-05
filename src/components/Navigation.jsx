import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/movies"> Movies </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
