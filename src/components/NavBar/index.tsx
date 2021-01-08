


import React from 'react'

const Navbar:React.FC = (props) => {
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href ="#">Home</a></li>
                <li><a href ="#">AboutUs</a></li>
                <li><a href ="#">Posts</a></li>
                <li><a href ="#">Contact Us</a></li>
            </ul>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <img src={require('../../assets/icons/search.png')} alt="Search" />
                </div>
        </div>
    )
}

export default Navbar