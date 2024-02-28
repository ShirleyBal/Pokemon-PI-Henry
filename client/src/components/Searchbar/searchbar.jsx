// En Searchbar.js
import { useState } from "react";
import style from "./searchbar.module.css";

export default function Searchbar({ onSearch }) {
  const [searchName, setSearchName] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value);
  };

  const handleButton = (event) => {
    if (event.key === "Enter") {
      onSearch(searchName);
    }
  };

  const handleSearch = () => {
    onSearch(searchName);
  };

  return (
    <div className={style.searchbarconteiner}>
      <input
        type="text"
        placeholder="Search Pokemon by name"
        value={searchName}
        onChange={handleInputChange}
        onKeyDown={handleButton}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
