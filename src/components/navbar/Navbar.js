import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header>
        <nav className="navbar">
            <a href="/" className="nav-item">Home</a>
            <a href="/users1" className="nav-item">Display Users</a>
            <a href="/edit:id" className="nav-item">Edit User</a>
        </nav>
        
        </header>  
    )
}

export default Navbar
