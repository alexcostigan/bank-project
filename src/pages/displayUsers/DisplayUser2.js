import React from 'react'
import Pagination from '../../components/pagination/Pagination'
import './displayUser.css'
import {userData2} from '../../data/Users2';
import faker from 'faker'

function DisplayUser2() {

    const allUsers = userData2.map( (user) => {
      return (
        <>
        <div className="profile_container">
            <div className="image_container">
                <div className="image">
                    <img src={faker.image.avatar()} alt="avatar" />
                </div>
            </div>
            <div className="title">
                    <h3>{user.Name}</h3>
                    <p>{user.Age}</p>
            
                <div className="text_container">
                        <h4>{user.Job}</h4>
                        {user.Address}<br />
                        {user.City}<br />

                    
                  <button className="display-button">{user.Balance}</button>
                </div>
            
        </div>
        </div>
        <Pagination />
        </>
      )
    })
  
  
  return allUsers 
  
}

export default DisplayUser2;