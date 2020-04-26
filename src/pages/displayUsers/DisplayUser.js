import React from 'react'
import User from '../../components/user/User'
import SearchBar from '../../components/searchbar/Searchbar'
import Pagination from '../../components/pagination/Pagination'
import Navbar from '../../components/navbar/Navbar'
import './displayUser.css'

function displayUser() {
  return (
    <div>
    <div className="search">
    <SearchBar />
    </div>
    <Navbar />
    <div className="container-left">
    <User 
      name="Jack Smith"
      age="24"
      job="Teacher"
      address=" 1 elm road"
      city="London"
      balance="150£"
    />
    <User 
       name="Henry Davis"
       age="47"
       job="Doctor"
       address="34 New Drive Lane"
       city="Nottingham"
       balance="345£"
    />
    </div>
    <div className="container-right">
    <User 
       name="Maggie Jones"
       age="56"
       job="Restaurant Owner"
       address="55 Meadow Drive"
       city="Manchester"
       balance="785£"
    />
    <User 
       name="Jenny Young"
       age="19"
       job="Actress"
       address="1 Park Drive"
       city="Glasgow"
       balance="45£"
    />
    </div>
    <div className="pagination">
    <Pagination />
    </div>
    </div>
  );
}

export default displayUser;
