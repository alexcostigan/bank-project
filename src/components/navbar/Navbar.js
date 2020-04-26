import React from 'react'
import './navbar.css'
const Navbar = () => {
    return (
        <header>
        <nav class="navbar">
            <a href="#" class="nav-item" active-color="orange">Home</a>
            <a href="#" class="nav-item" active-color="green">Display Users</a>
            <a href="#" class="nav-item" active-color="blue">Edit User</a>
          </nav>
        
        </header>  
    )
}

export default Navbar
