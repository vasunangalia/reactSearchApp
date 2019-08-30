import React from 'react'
import "../App.css"

const User = (props) => {
    return (
        <div className="user-container">
            <div className="user-image"><img src={props.avatar} /></div>
            <p className="user-name">{props.name}</p>
            <p className="user-gender">{props.gender}</p>
            <p className="user-phone">{props.phone}</p>
        </div>
    )
}


export default User
