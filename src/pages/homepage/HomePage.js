import React from 'react'
import DisplayBox from '../../components/displayBox/DisplayBox';
import SearchBox from '../../components/searchbox/SearchBox'
import './homepage.css'
export const HomePage = () => {
    return (
        <div>
            <DisplayBox />
            <SearchBox />
        </div>
    )
}

export default HomePage