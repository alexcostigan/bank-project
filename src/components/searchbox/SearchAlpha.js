import React from 'react'
import { BsSearch } from "react-icons/bs"

const SearchAlpha = () => {
    return (
        <div>
            <div className="searchbox-alpha">
                <div className="searchbox-display">
                    <input type="text" placeholder="Search Alphabettically" className="searchbox-text" />
                    <a href="" className="searchbox-button">
                        <BsSearch />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SearchAlpha
