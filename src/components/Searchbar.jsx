import React, {useState} from "react";
import "./searchbar.css"

const SearchBar = ({ onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {

        onSearch (query);
    };

    return (
        <div className="search-bar">
       <input
       type= "text"
        placeholder="Search..."
            value={query}
            onChange={(e) => setQuert(e.target.value)} />
            <button onClick={handleSearch}> Search</button>
    
        </div>
    )
};

export default Searchbar;