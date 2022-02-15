import React from 'react';
import people from '../../assets/people.png';
import a from '../../assets/a.png';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => (
  <div className="csd__header section__padding" id="home">
    <div className="csd__header-content">
      <h1 className="gradient__text">COMPUTER SCIENCE SOCIETY</h1>
      <p>The Computer Science Society - CSS (Formerly the Area of Dominant Coders Club - ADC) is an initiative of the students of the Department of Computer Science, Aligarh Muslim University, Aligarh. It is a platform to share the knowledge of Computer Science among all the interested members of the Faculty of Science.</p>

      <div className="csd__header-content__input">
        <Link to="/join" >
          <button type="button">Become a member</button>
        </Link>
      </div>

      <div className="csd__header-content__people">
        <img src={people} alt="img"/>
        <p>Become a member. Join us!</p>
      </div>
    </div>

    <div className="csd__header-image">
      <img src={a} alt="img"/>
    </div>
  </div>
);

export default Header;