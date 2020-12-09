import React from 'react'
import './RecentItems.css'
const RecentItems = ({url, title}) => {
    return (
        <div className="item">
            <iframe width="727" height="409" src="https://www.youtube.com/embed/RDV3Z1KCBvo"
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div className="item__details">
                <img src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj" />
                <div className="item__detailstext">
                    <h4>{title}</h4>
                    <p>cleverprogrammer</p>
                    <p>Science & Technology</p>
                </div>
            </div>
            
        </div>
    )
}

export default RecentItems
