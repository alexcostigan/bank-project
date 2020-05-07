import React from 'react'
import Pagination from '../../components/pagination/Pagination'
import './displayUser.css'

import { Link } from 'react-router-dom'
import faker from 'faker';
import { connect } from 'react-redux'
import { editingUser } from '../../actions/editAction'
import { getUserData } from '../../actions/getAction'

function DisplayUser(props) {
  console.log(props)

  // return (
  //   <button onClick={props.getUserData}>button</button>
  // )
    const allUsers = props.userProps && props.userProps.allUsers.map( (user) => {
   // const allUsers = userData.map( (user) => {
      return (
        <>
          <Link to={`/edit/${user.id}`} className="link">
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
                  </div>
              
              </div>
          </div>
          </Link>
          <Pagination />
        </>
      )
    })
  
  
  return allUsers 
}

const mapStateToProps = state => ({
    userProps: state.allUsersState
})

export default connect(mapStateToProps, { getUserData } )(DisplayUser)