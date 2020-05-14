import React, { useState } from 'react';
import './edituser.css'
import { userData } from '../../data/Users';

import { connect } from 'react-redux'
import { editingUser } from '../../actions/editAction'

const EditUser = ({ match }, props) => {
    const [formData, setFormData] = useState({
        userName: '',
        job: '',
        age: '',
        city: '',
        address: '',
        balance: ''
    })
    const editTheUser = (e) => {
        e.preventDefault()
        console.log("editing the user")
        editingUser(formData)
    }

    const getFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            [e.target.job]: e.target.value,
            [e.target.age]: e.target.value,
            [e.target.city]: e.target.value,
            [e.target.address]: e.target.value,
            [e.target.balance]: e.target.value
        })
    }
    console.log(formData)

    const userId = match.params.id
    const users = userData.map( (user) => {
        if( userId === user.id.toString()) {
            return (
            
                <div className="edit-container">
                
                    <form className="edit-form-wrap" onSubmit={editTheUser}>

                        <header className="edit-header">
                            <h3>Edit User</h3>
                        </header>
                        <div className="edit-form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="userName" placeholder={user.Name}
                            onChange={getFormData}
                            /> 
                            
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="job">Job</label>
                            <input type="text" name="job" placeholder={user.Job}
                            onChange={getFormData}
                            />
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="age">Age</label>
                            <input type="number" name="age" placeholder={user.Age} 
                            onChange={getFormData}
                            />
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" placeholder={user.Address}
                            onChange={getFormData}
                            />
                        </div>
                        <div className="edit-form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" placeholder={user.City}
                            onChange={getFormData}
                            />
                        </div>
                        
                        <div className="edit-form-group">
                            <label htmlFor="balance">Balance</label>
                            <input type="number" name="balance" placeholder={user.Balance}
                            onChange={getFormData}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
               
            )
         }
    })
    

    return users
}

const mapStateToProps = state => ({
    editProps: state.editingUserState
})

export default connect(mapStateToProps, { editingUser } )(EditUser)
