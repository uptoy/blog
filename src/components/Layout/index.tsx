import React from 'react'
import './style.css'
import SideBar from '../Sidebar'

const Layout = (props:any) => {
    return (
        <div>
            {props.children}
            <SideBar />
        </div>
    )
}

export default Layout