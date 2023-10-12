import React from "react";
import './Machine.css'

function Machine(props) {
    return (
        <div className="machine__container">
            <img src={props.image} alt="machine"/>
            <div className="machine__wrapper">
                <h1>{props.name}</h1>
                <h2>{props.detail}</h2>
                <h2>{props.description}</h2>   
            </div>        
        </div>
    )
}

export default Machine;