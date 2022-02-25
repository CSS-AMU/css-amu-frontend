import React from 'react';
import a from '../../assets/cssamucenter.png';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => (
  <div className="csd__header section__padding" id="home">
    <div className="csd__header-content">
      <h1 className="gradient__text">COMPUTER SCIENCE SOCIETY</h1>
      <p>An initiative by the students of the Department of Computer Science, Aligarh Muslim University, Aligarh, to share Computer Science knowledge, learn and grow beyond classrooms, and innovate in the technological sphere.</p>

      <div className="csd__header-content__input">
        <Link to="/join" >
          <button type="button">&nbsp; &nbsp; Join Us &nbsp; &nbsp; </button>
        </Link>
      </div>
    </div>

    <div className="csd__header-image">
      <img src={a} alt="img"/>
    </div>
  </div>
);

export default Header;