import React, {useState} from "react";

const SearchBar = ({ onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {

        onSearch (query);
    };

    return (
        <div></div>
    )
};

export default SearchBar;