import React from 'react'
import './navbar.css'
const Navbar = () => {
    return (
        <header>
        <nav className="navbar">
            <a href="/" className="nav-item">Home</a>
            <a href="/users1" className="nav-item">Display Users</a>
            <a href="/edit" className="nav-item">Edit User</a>
        </nav>
        
        </header>  
    )
}

export default Navbar
