import React from 'react'
import { Avatar } from '@material-ui/core'
import './Header.css'
const Header = () => {
    return (
        <div class="header">
            <div className="header-left">
                <img className="header_leftLogo" src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
                alt="twitch logo" / >
                <h3>Following</h3>
                <h3>Browse</h3>
                <div className="header_varticalLine"></div>
                <h3>Esports</h3>
                <h3>Muslic</h3>
                <i className = "fa fa-ellipsis-h"></i>
            </div>
            <div className="header-center">
                <input type="text" placeholder="Search" />
                <div className="header_centerLogoContainer">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="header-right">
              <div className="header_rightContainer">
                  <i className="fas fa-crown"></i>
                  <i className="fas fa-inbox"></i>
                  <i className="fas fa-comment-alt"></i>

                <div className="header__rightBits">
                    <i className="fas fa-gem"></i>
                    <h4>Get Bits</h4>
                </div>

                <Avatar />

              </div>
            </div>
        </div>
    )
}

export default Header
