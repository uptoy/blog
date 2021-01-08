import React from 'react'

const Header: React.FC = (props:any) => {
    return (
        <header className="header">
          <nav className="headerMenu">
            <a href="#" >Home</a>
            <a href="#" >About Us</a>
            <a href="#" >Contact Us</a>
          </nav>
          <div>
            Link
          </div>
        </header>
      )
}

export default Header