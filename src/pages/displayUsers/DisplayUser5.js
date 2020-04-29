import React, { useEffect } from 'react'
import Pagination from '../../components/pagination/Pagination'
import './displayUser.css'
import {userData5} from '../../data/Users5';
import faker from 'faker'

function DisplayUser5() {

    const allUsers = userData5.map( (user) => {
      return (
        <>
        <div className="profile_container">
            <div className="image_container">
                <div className="image">
                    <img src={faker.image.avatar()} />
                </div>
            </div>
            <div className="title">
                    <h3>{user.Name}</h3>
                    <p>{user.Age}</p>
            
                <div className="text_container">
                        <h4>{user.Job}</h4>
                        {user.Address}<br />
                        {user.City}<br />

                    
                  <button className="display-button">Display Balance</button>
                </div>
            
        </div>
        </div>
        <Pagination />
        </>
      )
    })
  
  
  return allUsers 
  
}

export default DisplayUser5;