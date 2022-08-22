import React from 'react'

function Card(props) {

    return (
        <div className='card'>
            <img src={props.imgCover} alt="Location Photo" className='photo--location' />
            <div className="data">
                <div className="location--map">
                    <img src="/images/pin.svg" alt="pin" className='pin' />
                    <span className="location">{props.location.country}</span>
                    <span className="view-on-map"><a href="#">View on Google Maps</a></span>
                </div>
                <div className="place">{props.location.place}</div>
                <div className="dates">
                    <span className="start">{props.dates.startDate}</span>
                    <span className="sep">&nbsp;-&nbsp;</span>
                    <span className="end">{props.dates.endDate}</span>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    )
}

export default Card
