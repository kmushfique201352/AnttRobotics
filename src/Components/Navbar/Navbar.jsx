import React from 'react'
import './Navbar.css'

const Navbar=({onNavClick})=>{
    return(
        <header className="header">
            <a href="/" className="logo">Logo</a>

            <nav className="navbar">
                <a href="/" onClick={()=>onNavClick('home')}>Home</a>
                <a href="/">Courses</a>
                <a href="/">Dashboard</a>
            </nav>

            <div className="dp">
                <img src="src/Components/Navbar/dp.jpg" alt="Profile" className="profile-pic" />
            </div>
        </header>
    )
}

export default Navbar