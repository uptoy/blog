import React from 'react'
import './style.css'

const Card:React.FC = (props:any) => {
    return(
        <div className="card">
            {props.children}
        </div>
    )
}

export default Card