import React from 'react';




const Banner = (props)=>{

    return(
        <div className="banner-main">
            <div style={{backgroundImage: `url(${props.imageUrl})`}} className="banner-bg"></div>
            <div className="banner-content">
                <div className="banner-title">{props.title}</div>
                <div className="banner-description">{props.description}</div>
                <button>{props.buttonText}</button>
            </div>
        </div>
    )
}

export default Banner;