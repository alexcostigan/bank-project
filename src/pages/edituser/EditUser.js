import React from 'react';
import './edituser.css'
import { userData } from '../../data/Users';

import { connect } from 'react-redux'
import { editingUser } from '../../actions/editAction'

const EditUser = ({ match }) => {
    console.log(match)
    const userId = match.params.id
    // console.log(props)
    // return (
    //     <button type="submit" onClick={props.editingUser}>button</button>
    // )
    const users = userData.map( (user) => {
        if( userId === user.id.toString()) {
            return (
            
                <div className="edit-container">
                
                    <div className="edit-form-wrap">

                        <header className="edit-header">
                            <h3>Edit User</h3>
                        </header>
                        <div className="edit-form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="last-name" placeholder={user.Name}
                            /> 
                            
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="job">Job</label>
                            <input type="text" name="job" placeholder={user.Job} />
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="age">Age</label>
                            <input type="number" name="age" placeholder={user.Age}  />
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" placeholder={user.Address} />
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" placeholder={user.City}  />
                        </div>
                        
                        <div className="edit-form-group">
                            <label htmlFor="balance">Balance</label>
                            <input type="number" name="balance" placeholder={user.Balance}  />
                        </div>
                        
                    </div>
                </div>
               
            )
         }
    })
    

    return users
}


export default connect(null, { editingUser } )(EditUser)
