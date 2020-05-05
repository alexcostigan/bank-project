import React from 'react';
import './edituser.css'
import { userData } from '../../data/Users';
import { Link } from 'react-router-dom'

const EditUser = ({ match }) => {
    console.log(match)
    const userId = match.params.id


    const users = userData.map( (user) => {
        if( userId === user.id.toString()) {
            return (
            
                <div class="edit-container">
                
                    <div class="edit-form-wrap">

                        <header className="edit-header">
                            <h3>Edit User</h3>
                        </header>
                        <div class="edit-form-group">
                            <label for="name">Name</label>
                            <input type="text" name="last-name" placeholder={user.Name}/>
                            
                        </div>
                        <div class="edit-form-group">
                            <label for="job">Job</label>
                            <input type="text" name="job" placeholder={user.Job} />
                        </div>
                        <div class="edit-form-group">
                            <label for="age">Age</label>
                            <input type="number" name="age" placeholder={user.Age}  />
                        </div>
                        <div class="edit-form-group">
                            <label for="address">Address</label>
                            <input type="text" name="address" placeholder={user.Address} />
                        </div>
                        <div class="edit-form-group">
                            <label for="city">City</label>
                            <input type="text" name="city" placeholder={user.City}  />
                        </div>
                        
                        <div class="edit-form-group">
                            <label for="balance">Balance</label>
                            <input type="number" name="balance" placeholder={user.Balance}  />
                        </div>
                        
                    </div>
                </div>
            )
        }
    })

    return users
}


export default EditUser
