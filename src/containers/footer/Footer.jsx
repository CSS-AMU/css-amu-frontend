import React from 'react';
import csdLogo from '../../assets/csslogo.png';
import './footer.css';

const Footer = () => (
  <div className="csd__footer section__padding">
    <div className="csd__footer-heading">
      <h1 className="gradient__text">Do you have any suggestion or feedback ?</h1>
    </div>

    <div className="csd__footer-btn">
    <a href="mailto:adc.club.amu@gmail.com">
    <p>Contact</p>
    </a>  
    </div>

    <div className="csd__footer-links">
      <div className="csd__footer-links_logo">
        <img src={csdLogo} alt="csd_logo" />
        <p>COMPUTER SCIENCE SOCIETY<br/> <br /> 
         All Rights Reserved</p>
      </div>
      <div className="csd__footer-links_div">
        <h4>Links</h4>
        <a href="https://www.instagram.com/css.amu/" target="_blank" rel="noreferrer">
        <p>Instagram</p>
        </a>
        <a href="https://www.linkedin.com/company/cssamu/" target="_blank" rel="noreferrer">
        <p>Linkedin</p>
        </a>
        <a href="https://join.slack.com/t/devhubamu/shared_invite/zt-qf9rbwoj-JsJM7ID162C8ouCk3kRO1w" target="_blank" rel="noreferrer">
        <p>Slack Invite</p>
        </a>
      </div>
      <div className="csd__footer-links_div">
        <h4>Developed By</h4>
        <p>Hasan Faraz Khan</p>
        <p>Noor Fatima</p>
      </div>
      <div className="csd__footer-links_div">
        <h4>Get in touch</h4>
        <p>Department of Computer Science,<br/> Faculty of Science, Aligarh Muslim University<br/>
        Aligarh, India</p>
        <p>society.cs@myamu.ac.in</p>
        <p>adc.club.amu@gmail.com</p>
      </div>
    </div>

    <div className="csd__footer-copyright">
      <p>@2022 CSS AMU : Made with React.js and Python ❤️</p>
    </div>
  </div>
);

export default Footer;