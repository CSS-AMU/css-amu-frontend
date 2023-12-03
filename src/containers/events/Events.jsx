import React from 'react';
import eventsImage from '../../assets/ea.jpg';
import './events.css';

const Events = () => (
  <div className="csd__events section__padding" id="events">
    <div className="csd__events-image">
      <img src={eventsImage} alt="events" />
    </div>
    <div className="csd__events-content">
      <h4>EVENTS CONDUCTED BY COMPUTER SCIENCE SOCIETY</h4>
      <h1 className="gradient__text">We organized various events <br /> gaining participants from throughout the COUNTRY.</h1>
       <p>CodeHawk Coding Competition, September 20, 2023<br/>
          Web it up !  A one-week workshop on Web Development, September 19, 2022<br />
          Poster & Logo Making Competition (Theme Ragging Free Campus), August 16,2023<br />
          Speech Competition on the topic "Role of ICT in Nation Building, August 10, 2022<br />
          Winter of code January, 2022<br />
          Career Paths in IT Industry: Present and Future December 23, 2021<br />
          Android Study Jams December, 2021<br />
          Build and Deploy your first website (Hands-on workshop) October  31, 2021<br />
          Localhost: Code Collaboration with GitHub(Hands-on workshop) October  24, 2021<br />
          Poster Making Competition(Theme: INDIA@2047) August, 2021<br />
          CSS Internship May, 2021<br />
          AMU Hacks 1.0 September  13, 2020<br />
          Workshop on Internet of Things March 14, 2020</p>
      <h4>Become an active member. What are you waiting for?</h4>
    </div>
  </div>
);

export default Events;
