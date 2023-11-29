import axios from "axios";
import React, { useState } from "react";
const Search = (props) => {
    console.log(props)
    
   const [search,setSearch]= useState("");
return(
   <div>
     <input
       type="text"
       className="search"
       placeholder="Search for..."
       defaultValue=""
       onChange={(e) => setSearch(e.target.value)}
     />
     <button
       className="btn btn-secondary searchButton"
       type="button"
       onClick={() => props.handleSearch(search)}
     >
       Search
     </button>
   </div>
)
}
 
export default Search;