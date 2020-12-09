import React from 'react'
import Channel from './Channel'
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <h5>RECOMENDED CHANNELS</h5>
                <Channel avater="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
                name="CleverProgrammer" followers='820k' />
                <Channel avater="https://yt3.ggpht.com/ytc/AAUvwnjeHnMHZ7T341QLHqPhQPfsG6ugvg_SV6z6FkYqGw=s88-c-k-c0x00ffffff-no-rj"
                name="CodeWithHarry" followers='832k' />
                <Channel avater="https://yt3.ggpht.com/ytc/AAUvwnhsxToPD9T0jhAcDFj6qSFV0iWLZ2QLdlyNNqi2Qw=s88-c-k-c0x00ffffff-no-rj"
                name="Dennis Ivy" followers='92.k' />
                <p className="sidebar__topShowMore">Show More</p>  
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search to add friend" />
                </div>
            </div>      
        </div>
    )
}
export default Sidebar
