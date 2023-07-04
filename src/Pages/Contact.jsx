import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

import { FaLinkedinIn } from "react-icons/fa";
import { Flex, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <div id="contact" >
      
         
      <h4  style={{ fontSize: "25px",marginLeft:"30px",marginRight:"30px" }} >
        
          <span >FIND ME ON</span>
        </h4>
      <h4  style={{ fontSize: "25px",marginLeft:"30px",marginRight:"30px" }} >
        
          <span style={{ color: "#cd5ff8" }}>Feel Free to Connect with me :-</span>
        </h4>

            <div className="contacticons">
              <div id="contact-github" className="icons">
               
                <a  href="https://github.com/arpit017"><AiFillGithub size="2em"/></a>
                
              </div>
              <div id="contact-linkedin" className="icons">
                <a href="https://www.linkedin.com/in/arpit-kumar-4880b019b"><FaLinkedinIn size="2em"/></a>
              </div>
              <div className="icons">
                <a href="#"><AiFillInstagram size="2em"/></a>
              </div>
              
            </div>
            <h4  style={{ fontSize: "20px",marginLeft:"30px",marginRight:"30px" }} >
        
        <span style={{ color: "#cd5ff8" }}>or reach me through :-</span>
      </h4>
      <div className="contacticons">
              <div id="contact-phone" className="icons" style={{display:"flex"}}>
               
                <BsFillTelephoneFill size="1.5em" />&nbsp; &nbsp;<h4 style={{ color: "#cd5ff8" }}> <span style={{textDecoration: "underline"}}>+91-6202229706 </span> </h4>
                
                
              </div>
              
              <div className="icons" id="contact-email" style={{display:"flex"}}>
            <AiOutlineMail size="2em"/>&nbsp; &nbsp;<h4 style={{ color: "#cd5ff8" }}> <span style={{textDecoration: "underline"}}>shuklaji9706@gmail.com </span> </h4>
              </div>
              
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
};

export default Contact;
