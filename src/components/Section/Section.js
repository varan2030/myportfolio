import React from "react";
import { Row, Col, Container   } from 'reactstrap';
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
        <Col xs="4" className="">
        <img src="/images/AlmazDolubaev1.jpg" alt="img" />
        </ Col>
        <Col xs="8" className="">
        <h1>About me</h1>
        <h5>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.

  Note: The section tag is not supported in Internet Explorer 8 and earlier versions.</h5>
  </ Col>
  </ Row>
    
  </section>
);

export default Section;
