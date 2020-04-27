import React from 'react'
import Navbar from '../components/navbar/Navbar'
import DisplayBox from '../components/displayBox/DisplayBox';
import SearchBox from '../components/searchbox/SearchBox'
import './homepage.css'
export const HomePage = () => {
    return (
        <div>
            <Navbar />
            <DisplayBox />
            <SearchBox />
        </div>
    )
}

export default HomePage