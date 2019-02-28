import React from 'react'

function GameCard(props){
    console.log(props);
    const images = props.data.screenshot_url.split(',');
    const rand = Math.floor(Math.random() * images.length)
    const image = images[rand];
    return(
        <div className="col s3 game-card">
            <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={image} />
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.data.name}<i className="material-icons right">more_vert</i></span>
            <p><a href={props.data.url}>Game homepage</a></p>
            </div>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{props.data.name}<i className="material-icons right">close</i></span>
            <p>{props.data.summary}</p>
            </div>
        </div>        
    </div>
    )
}

export default GameCard;