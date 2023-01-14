import React from "react";
import "./card.css"

function Card(props) {

    return <>
        <div className="card">
            <div>
                <img className="card_img" src={props.src} alt="pic" />
            </div>
            <div className="card_Text">
                <h2 className="card_tittle">
                    {props.title}
                </h2>
                <h4 className="card_sec_title">{props.language}</h4>
                <p className="card_content">
                   {props.Data}

                </p>
            </div>
        </div>
    </>
}

export default Card
