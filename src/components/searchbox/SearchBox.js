import React from 'react';
import './searchbox.css'
import { BsSearch } from "react-icons/bs"

const SearchBox = () => {
    return (
        <div className="searchbox">
            <div className="searchbox-city">
                <h2>Search by City</h2> 
                <div className="searchbox-display">
                    <input type="text" placeholder="Search by City" className="searchbox-input" />
                        <a href="#" className="searchbox-button">
                        <BsSearch />
                        </a>
                </div>
            </div>

            <div className="searchbox-alpha">
                <h2>Search Alphabetically</h2>
                <div className="searchbox-display">
                    <input type="text" placeholder="Search Alphabetically" className="searchbox-input" />
                        <a href="#" className="searchbox-button">
                        <BsSearch />
                        </a>
                </div>
            </div>

            <div className="searchbox-age">
                <h2>Search by Age</h2>
                <div className="searchbox-display">
                    <input type="text" placeholder="Search by Age" className="searchbox-input" />
                        <a href="#" className="searchbox-button">
                        <BsSearch />
                        </a>
                </div>
            </div>
        </div>
    )
}

export default SearchBox
