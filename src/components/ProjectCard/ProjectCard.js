import React from "react";
import "./ProjectCard.css";


// Project card component
const ProjectCard = props => (
  <div className="card ">

  <div className="container">
  <div className="artwork">
    <div className="side">
    <img className="card-img-top" src={props.image} alt={props.name}/>
    </div>
    <div className="side back">
    <img className="card-img-top" src="/images/backgr1.jpg" alt={props.name}/>
    </div>
  </div>
  <div>
  <h3 className="text-center" onClick={() => props.clickCard(props.link)} >{props.title}</h3>
</div>
</div>
   
    
  </div>
  
);

export default ProjectCard;
