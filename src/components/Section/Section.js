import React from "react";
import { Row, Col } from 'reactstrap';
import "./Section.css";


// const Section = (props) => {
//   return (
//     <div>
//       <Card className="abloutMe">
//         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Card title</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick Section text to build on the card title and make up the bulk of the card's content.</CardText>

//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Section;


// Section component
const Section = props => (
  <section className="section">

    <Row>
      <Col lg="4" md="12" className="">
      <div>
        <img className="photo" src="/images/AlmazDolubaev1.jpg" alt="img" />
        </div>
      </ Col>
      <Col lg="8" md="12" className="">
       <div>
        <h2>My name is Almaz Dolubaev. I am a Full Stack JavaScript Web Developer. I build complex websites with full frontend and backend all the way from mockup to rollout and work with diverse teams to implement projects.
        </h2>
        <br></br>
         <h2>
         My previous experiences in banking and entrepreneurship helped me nurture my passion to coding, which has been always the area of my interest.   
        </h2>
      </div>
      </ Col>
    </ Row>

  </section>
);

export default Section;
