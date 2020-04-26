import React from 'react'
import './user.css'
import faker from 'faker';

const User = (props) => {
    return (
        <div className="box-container">
                <img src={faker.image.avatar()} />
                <div className="name">{props.name}</div> 
                <div className="job">{props.job}</div>
                <div className="age">{props.age}</div> 
                <div className="address">{props.address}</div>
                <div className="city">{props.city}</div>
                <div className="balance">Bank balance: {props.balance}</div>
            
        </div>
    )
}

export default User;
