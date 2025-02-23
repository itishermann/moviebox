import React from "react";
import SearchIcon from '@material-ui/icons/Search';

import "./SearchBox.css";

const SearchBox = ({ placeholder, onSubmit }) => {
  const [text, setText] = React.useState("");

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(text)
  };

  return (
    
    <form id="search" className="SearchBox d-flex" onSubmit={handleSubmit} aria-label="serachbox">
      <input
        name="search"
        type="text"
        aria-label="serachbox"
        value={text}
        placeholder={placeholder || "Let's search a movie (eg Girls)"}
        onChange={handleChange}
      />
      <button type="submit" aria-label="Search">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBox;