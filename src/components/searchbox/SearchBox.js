import React from 'react';
import './searchbox.css'
import { BsSearch } from "react-icons/bs"

const SearchBox = () => {
    return (
        <>
        <div className="search-city">
        <h2>Search by City</h2> 
        <div class="wrapper">
        <div class="search-box">
            <input type="text" placeholder="Search by City" class="search-input" />
                <a href="#" class="search-btn">
                <BsSearch />
                </a>
        </div>
                        
        </div>
        </div>
        <div className="search-alpha">
        <h2>Search Alphabetically</h2>
        <div class="search-box">
            <input type="text" placeholder="Search Alphabetically" class="search-input" />
                <a href="#" class="search-btn">
                <BsSearch />
                </a>
        </div>
        </div>
        <div className="search-age">
        <h2>Search by Age</h2>
        <div class="search-box">
            <input type="text" placeholder="Search by Age" class="search-input" />
                <a href="#" class="search-btn">
                <BsSearch />
                </a>
        </div>
        </div>
        </>
    )
}

export default SearchBox
