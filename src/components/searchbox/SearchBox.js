import React from 'react';
import './searchbox.css'

import SearchCity from './SearchCity'
import SearchAlpha from './SearchAlpha'
import SearchAge from './SearchAge'
class SearchBox extends React.Component{
    
    render(){
        
        

    return (
        <div className="searchbox">

            <SearchCity />
            <SearchAlpha />
            <SearchAge />

        </div>
    )
    }
}

export default SearchBox
