import React from 'react'
import './Channel.css'

const Channel = ({avater, name, followers }) => {
    return (
        <div className="channel">
            <div className="channel__details">
                <img src={avater} alt="avater" />
                <p>{name}</p>
            </div>
            <p>{followers}</p>
             
        </div>
    )
}

export default Channel
