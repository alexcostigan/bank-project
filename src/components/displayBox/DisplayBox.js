import React from 'react'
import Searchbar from '../searchbar/Searchbar'
import './displaybox.css'

const DisplayBox = () => {
    return (
        <div>
        <div className="search-bar">
        <Searchbar />
        </div>
        <div className="display-box">
            <div>
                <button className="user-page"><a href="#">User's Page</a></button>
            </div>
            <div>
                <button className="add"><a href="#">Add New User</a></button>
            </div>
            <div class="title">
                <span class="letter-blink">M</span>
                <span class="letter-2">y</span>
                <span class="letter-blink">B</span>
                <span class="letter-1">a</span>
                <span class="letter-2">n</span>
                <span class="letter-">k</span>
                <span class="letter-blink">A</span>
                <span class="letter-1">p</span>
                <span class="letter-2">p</span>
            </div>
        </div>
        </div>
    )
}

export default DisplayBox
