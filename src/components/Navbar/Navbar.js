import React from "react";
import "./Navbar.css";
import {Container} from 'reactstrap';

// Navbar component
const Navbar = props => (
  <Container>
  <nav className="navbar fixed-top navbar-dark navbar-custom p-2">
  <div className="dropdown ">
  <div className="menu dropdown-toggle text-white " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Contact
  </div>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item githubIcon" target="_blank" rel="noopener noreferrer" href="https://github.com/varan2030">
    <img className="icon" src="/images/github.png" alt="icon"/>
    <div className="github">github.com/varan2030</div>
    </a>
    <a className="dropdown-item linkedinIcon"  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dolubaev/">
    <img className="icon" src="/images/linkedin.png" alt="icon"/><div className="linkedin">linkedin.com/in/dolubaev/</div></a>
    <a className="dropdown-item  emailIcon" href="mailto:almaz.dolubaev@gmail.com?Subject=Looking%20for%20a%20candidate" target="_top">
    <img className="icon" src="/images/message.png" alt="icon" />
    <div className="email">almaz.dolubaev@gmail.com</div>
    </a>
    {/* <button  onClick={this.getMenuData}>Take Order</button> */}
  </div>
</div>
  </nav>
       {/* <div className="modal fade" id="emailModal" tabIndex="-1" role="dialog" aria-labelledby="orderModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header modal-header-pers">
                <h5 className="modal-title" id="orderModalLabel">Send Email
                </h5>
                <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
      
<form action="mailto: adolubaev@mail.ru" method="post" enctype="text/plain">
<div className="form-group text-center">
  <label className="label" for="inputName" name="name">Name</label>
      <input type="text" className="form-control" placeholder="Enter Name" />
      </div>
      
      <div className="form-group text-center">  
       <label className="label" for="inputEmail" name="email">Email Address</label>
         <input type="text" className="form-control" placeholder="Enter Email" />
      </div>
  
      <div className="form-group text-center">
              <label className="label" for="comment">Message</label>
              <textarea className="form-control" type="text" rows="10" placeholder="Message" name="massege"></textarea>
            </div>
            <button  className="submit" type="submit" value="Send">Submit</button>
    </form>

              </div>
              <div className="modal-footer"> 
              
                 
               
               </div>
            </div>
          </div>
        </div> */}
  </Container>
);

export default Navbar;
// onClick={this.getTableData}  data-dismiss="modal"
//AIzaSyByDsW-io5C6orAAtC3_tuZlvqMqVMQpAA