
import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Section from "./components/Section";
import characters from "./characters.json";
import {Container   } from 'reactstrap';

class App extends Component {

  // Set our state variables

  // Card is clicked
  clickCard = card => {
 console.log("hello");
  };

  // Render the page
  render() {
    return (
         <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
        <Section />
        </ Wrapper>
          <Wrapper>
            {characters
              .sort((a, b) => 0.5 - Math.random())
              .map(randomCard => (
                <CharacterCard
                  clickCard={this.clickCard}
                  id={randomCard.id}
                  key={randomCard.id}
                  image={randomCard.image} 
                  description={randomCard.description}/>))}
                  
          </Wrapper>
        <Footer />
      </div>
     
    );
  }
}

export default App;
