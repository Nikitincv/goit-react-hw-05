import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import s from "./SearchBar.module.css";
const SearchBar = ({ onSubmit }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.text.value;
    if (value === "") {
      return toast.error("This didn't work.");
    }
    onSubmit(value);
    e.target.reset();
  };
  return (
    <header className={s.header}>
      <form className={s.headerForm} onSubmit={handelSubmit}>
        <button className={s.headerSubmitBtn} type="submit">
          <CiSearch />
        </button>
        <input
          className={s.headerInput}
          name="text"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
