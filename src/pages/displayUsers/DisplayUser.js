import React, { useState } from 'react'
import Pagination from '../../components/pagination/Pagination'
import './displayUser.css'
import { userData } from '../../data/Users';
import { Link } from 'react-router-dom'
import faker from 'faker';

function DisplayUser() {

    const allUsers = userData.map( (user) => {
      return (
        <>
          <div className="profile_container">
              <div className="image_container">
                  <div className="image">
                      <img src={faker.image.avatar()} />
                  </div>
              </div>
              
              <div className="title">
                <Link to={`/edit/${user.id}`}><h3>{user.Name}</h3></Link>
                      <p>{user.Age}</p>
              
                  <div className="text_container">
                          <h4>{user.Job}</h4>
                          {user.Address}<br />
                          {user.City}<br />
                  </div>
              
              </div>
          </div>
          <Pagination />
        </>
      )
    })
  
  
  return allUsers 
}

export default DisplayUser;