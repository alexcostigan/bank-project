import React, { useState } from 'react'
import './user.css'
import faker from 'faker';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state= {title: 'Display Balance'}
     }
    render() {
    return (
        <div className="profile_container">
            <div className="image_container">
                <div className="image">
                    <img src={faker.image.avatar()} />
                </div>
            </div>
            <div className="title">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.age}</p>
            
                <div className="text_container">
                        <h4>{this.props.job}</h4>
                        {this.props.address}<br />
                        {this.props.city}<br />
                    <div className="button">
                        <button onClick={() => this.setState({title: this.props.balance})}>{this.state.title}</button>
                    </div>
                </div>
            
        </div>
        </div>
    
    )
    }
}

export default User;
