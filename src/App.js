
import React, { Component } from "react";
import ProjectCard from "./components/ProjectCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Section from "./components/Section";
import projects from "./projects.json";
import {Container } from 'reactstrap';
import Favicon from 'react-favicon';

class App extends Component {

  // Set our state variables
  state = {
    cardNumber: 3
  }
  // Card is clicked
  clickCard = link => {
    window.location = link;
  };

  displayProjects = () =>{
    if(this.state.cardNumber === 3){
    this.setState({cardNumber: 12})
    } else {
      this.setState({cardNumber: 3})
    }
  }



  // Render the page
  render() {
    return (
      <Container>
         <div>
        <Navbar />
        <Jumbotron />
        <br></br>
        <h1 className="text-left">About me</h1 >
        <Wrapper>
       
        <Section />
        </ Wrapper>
    
        <h1 className="text-left">My projects</h1>
          <Wrapper>
            {projects.slice(0, this.state.cardNumber)
             
              .map(project => (
                <ProjectCard
                  clickCard={this.clickCard}
                  id={project.id}
                  key={project.id}
                  image={project.image} 
                  description={project.description}
                  link={project.link}/>))}
                  
          </Wrapper>
          <h1 className="text-right" onClick={this.displayProjects} style={{cursor: 'pointer'}}>more...</h1 >
        <Footer />
      </div>
     <div>
      <Favicon url="/images/favicon1.png" />
    </div>
      </ Container>
    );
  }
}

export default App;
