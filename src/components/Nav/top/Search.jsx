import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./css/Search.css";
const Search = () => {
  return (
    <div className="navSearchCont">
      <div className="navSearch">
        <input
          type="search"
          pattern="search"
          title="search"
          name="search"
          placeholder="Search...."
          id="search"
        />
        <SearchIcon
          color="action"
          fontSize="small"
          className="navSearchIcon"
        />
      </div>
    </div>
  );
};

export default Search;
