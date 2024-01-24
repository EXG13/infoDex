import { useState } from 'react';
import Searchbar from "./pages/Searchbar"

function NewsBoard() {
  const[searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {

    console.log("Search Query: ", query);
    setSearchQuery(query);
  };



  return (
    <div className="board d-flex justify-content-center align-items-center ">
      <h2 id="title" className="ms-5 text-center">
        Daily Crypto News
      </h2>
      <Searchbar onSearch = {handleSearch}/>
    </div>
  );
}
export default NewsBoard;
