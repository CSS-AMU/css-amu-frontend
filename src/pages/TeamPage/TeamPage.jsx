import React from 'react';
import Article from '../../components/article/Article';
import { team01, team02, team03, team04, team05, team06, team07 } from '../../containers/team/imports';
import './teampage.css';

const Team = () => (
  <div className="csd__teampage section__padding" id="team">
    <div className="csd__teampage-heading">
      <h1 className="gradient__text">Meet the Current Team !<br /> Introducing the people behind this initiative.  </h1>
    </div>
    <div className="csd__teampage-container">      
      <div className="csd__teampage-container_groupB">
        <Article imgUrl={team01} date="Mentor CSS" text="Dr. Mohammad Nadeem"/>
        <Article imgUrl={team02} date="Coordinator CSS" text="Miss. Noor Fatima" />
        <Article imgUrl={team03} date="Secretary CSS  &nbsp; / &nbsp; Tech Lead" text="Mr. Hasan Faraz Khan" />
     </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className="csd__teampage-heading">
      <h1 className="gradient__text">PREVIOUS TEAM 2020-21</h1>
    </div>
    <div className="csd__teampage-container">      
      <div className="csd__teampage-container_groupB">
        <Article imgUrl={team02} date="Coordinator CSS &nbsp; /&nbsp; AI Research Mentor" text="Miss. Noor Fatima" />
        <Article imgUrl={team03} date="Secretary CSS &nbsp; /&nbsp;  Python Dev Mentor" text="Mr. Hasan Faraz Khan" />
        <Article imgUrl={team04} date="Web Development Mentor" text="Mr. Nikhil Upadhayay"/> 
     </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className="csd__teampage-container">      
      <div className="csd__teampage-container_groupB">
        <Article imgUrl={team05} date="Machine Learning Mentor" text="Mr.Mohammad Aquib" />
        <Article imgUrl={team06} date="App Development Mentor" text="Miss. Zuha Khan" />
        <Article imgUrl={team07} date="Senior Student Mentor" text="Mr. Shoeb Nusrat"/>     
     </div>
    </div>
  </div>
);

export default Team;