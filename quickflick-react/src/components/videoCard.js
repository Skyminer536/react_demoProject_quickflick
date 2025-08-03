import React from 'react';
import "../css/videoCard.css";


const VideoCard = (props) => {
    console.log(props.data.name)
    let imgPath = "./img/" + (props.data.thumbnail);
    console.log(imgPath)
    console.log(props.data.vidSrc);



    return (
        <div className="videoCard">
            <div>
                <img src={imgPath} alt="test"></img>
                <h2>{props.data.name}</h2>
                <p>{props.data.author}</p>
            </div>
            <div>
                <p>{props.data.date}</p>
                <p>{props.data.length}</p>
            </div>
            <a href={props.data.vidSrc}>Watch Now</a>

        </div>
    )

};

export default VideoCard;