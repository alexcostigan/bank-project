import React from 'react';
import './edituser.css'

const EditUser = () => {
    return (
        <>
        <div class="edit-container">
        
            <div class="edit-form-wrap">

                <header className="edit-header">
                    <h3>Edit User</h3>
                </header>
                <div class="edit-form-group">
                    <label for="name">Name</label>
                    <input type="text" name="last-name" id="edit-name" placeholder="Edit Name" />
                </div>
                <div class="edit-form-group">
                    <label for="job">Job</label>
                    <input type="text" name="job" id="edit-job" placeholder="Edit Job" />
                </div>
                <div class="edit-form-group">
                    <label for="age">Age</label>
                    <input type="number" name="age" id="edit-age" placeholder="Edit Age" />
                </div>
                <div class="edit-form-group">
                    <label for="address">Address</label>
                    <input type="text" name="address" id="edit-age" placeholder="Edit Address" />
                </div>
                <div class="edit-form-group">
                    <label for="city">City</label>
                    <input type="text" name="city" id="edit-city" placeholder="Edit City" />
                </div>
                
                <div class="edit-form-group">
                    <label for="balance">Balance</label>
                    <input type="number" name="balance" id="edit-balance" placeholder="Update Balance" />
                </div>
                
            </div>
        </div>
        </>
    )
}

export default EditUser
