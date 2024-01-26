import React, {useState} from "react";
import "./Searchbar.css"

function Searchbar ({ onSearch}) {
    const [query,setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };


    return (
      <div className="search-bar d-flex align-items-center justify-content-between py-1">
        <input
          type="text"
          placeholder="Search for news..."
          value={query}
          onChange={handleInputChange}
          className="form-control me-2 border border-dark"
        />

        <button className="btn btn-dark search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    );

}


export default Searchbar;