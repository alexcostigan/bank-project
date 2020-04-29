import React from 'react'
import './search.css'
const Searchbar = () => {
    return (
        <div className="searchbar-wrap">
        <div className="search-bar">
           <input type="text" className="searchbar-text" placeholder="What are you looking for?" />
           <button type="submit" className="searchbar-Button">
             <i className="fa fa-search"></i>
          </button>
        </div>
     </div>
    )
}

export default Searchbar
