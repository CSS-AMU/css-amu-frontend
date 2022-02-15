import React from 'react';
import Feature from '../../components/feature/Feature';
import './cssamu.css';

const CSSAMU = () => (
  <div className="csd__cssamu section__margin" id="wcsd">
    <div className="csd__cssamu-feature">
      <Feature title="Code for Change" text="The club received a warm response from the students of the Department of Computer Science. The members of the club are accomplishing various achievements and recognition in the field of Information Technology. In addition to regular informative sessions, the club also organizes workshops, hackathons, and internships at regular intervals." />
    </div>
    <div className="csd__cssamu-heading">
      <h1 className="gradient__text">CSS: A platform to Learn, Share and Grow</h1>
      <a href="/achievements" >
      <p>Explore our Accomplishments</p>
      </a>
    </div>
    <div className="csd__cssamu-container">
      <Feature title="Collaborate" text="Work together on technical and research based projects. Seek help from peers and seniors." />
      <Feature title="Learn" text="Bring about innovations in the technological sphere, learn beyond the classroom level." />
      <Feature title="Achieve" text="Participate in technical events and coding competitions such as workshops, short-term courses, hackathons, webinars, etc." />
    </div>
  </div>
);

export default CSSAMU;