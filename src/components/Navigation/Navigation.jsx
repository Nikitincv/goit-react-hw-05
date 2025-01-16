import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <header>
        <nav className={s.navBox}>
          <NavLink className={s.home} to="/">
            {" "}
            Home{" "}
          </NavLink>
          <NavLink className={s.movies} to="/movies">
            {" "}
            Movies{" "}
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
