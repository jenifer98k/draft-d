import React from "react";
import star from "../images/star.png";

export default function Card(props) {
   console.log(props)
    return (
      
       <div className="card">
          <img src={`../images/ ${props.img}`}alt="card" className="card--image"/>
          <div className="card--stats">
          <img src={star} alt="star" className="card--star"/>
          <span>{props.rating}</span>
          <span className="gray">(6) .</span>
          <span className="gray">USA</span>
          </div>
         
          <p><span className="bold">From <span>{props.price}</span></span>/person</p>
       </div>
    )
}
