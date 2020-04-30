import React from 'react';
import './searchbox.css'
import { BsSearch } from "react-icons/bs"

const SearchBox = () => {
    return (
        <div className="searchbox">

            <div className="searchbox-city">
                <div className="searchbox-display">
                    <input type="text" placeholder="Search By City" className="searchbox-text" />
                    <a href="" className="searchbox-button">
                        <BsSearch />
                    </a>
                </div>
            </div>

            <div className="searchbox-alpha">
                <div className="searchbox-display">
                    <input type="text" placeholder="Search Alphabettically" className="searchbox-text" />
                    <a href="" className="searchbox-button">
                        <BsSearch />
                    </a>
                </div>
            </div>

            <div className="searchbox-age">
                <div className="searchbox-display">
                    <input type="number" placeholder="Search by Age" className="searchbox-text" />
                    <a href="" className="searchbox-button">
                        <BsSearch />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default SearchBox
