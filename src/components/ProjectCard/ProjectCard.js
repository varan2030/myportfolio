import React from "react";
import "./ProjectCard.css";


// Project card component
const ProjectCard = props => (
  <div onClick={() => props.clickCard(props.link)} className="card ">
    <img className="card-img-top" src={props.image} alt={props.name}/>
    <h3 className="text-center">{props.description}</h3>
  </div>
  
);

export default ProjectCard;
