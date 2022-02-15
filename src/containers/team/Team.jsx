import React from 'react';
import Article from '../../components/article/Article';
import { team01, team02, team03 } from './imports';
import './team.css';

const Team = () => (
  <div className="csd__team section__padding" id="team">
    <div className="csd__team-heading">
      <h1 className="gradient__text">Meet the Team !<br /> Introducing the people behind CSS AMU.</h1>
    </div>
    <div className="csd__team-container">
      <div className="csd__team-container_groupB">
        <Article imgUrl={team01} date="Mentor CSS" text="Dr. Mohammad Nadeem"/>
        <Article imgUrl={team02} date="Coordinator CSS" text="Miss. Noor Fatima" />
        <Article imgUrl={team03} date="Secretary CSS  &nbsp; / &nbsp; Tech Lead" text="Mr. Hasan Faraz Khan" />
     </div>
    </div>
  </div>
);

export default Team;