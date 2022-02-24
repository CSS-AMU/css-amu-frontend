import React from 'react';
import Article from '../../components/article/Article';
import { team01, team02, team03, team10, team11, team12, team_asm, team_bkr,
         team_fsl, team_shl, team_sjd, team_swl, team04, team05, 
         team06, team07, team08, team09 } from '../../containers/team/imports';
import './teampage.css';

const Team = () => (
  <div className="csd__teampage section__padding" id="team">
    <div className="csd__teampage-heading">
      <h1 className="gradient__text">Meet the Current Team !<br /> Introducing the people behind this initiative.  </h1>
    </div>
    <div className="csd__team-container">
      <div className="csd__team-container_groupB">
        <Article imgUrl={team_asm} date="President" text="Prof. Aasim Zafar" />
        <Article imgUrl={team_bkr} date="Senior Mentor" text="Prof. Mohammad Ubaidullah Bokhari" />
        <Article imgUrl={team_shl} date="Mentor" text="Dr. Suhel Mustajab"/>
        <Article imgUrl={team_fsl} date="Mentor" text="Dr. Faisal Anwer" />
        <Article imgUrl={team_sjd} date="Mentor" text="Dr. Mohammad Sajid"/>
        <Article imgUrl={team_swl} date="Mentor" text="Dr. Swaleha Zubair" />  
        <Article imgUrl={team01} date="Convener CSS" text="Dr. Mohammad Nadeem"/>
     </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className="csd__teampage-heading">
      <h1 className="gradient__text">STUDENT TEAM </h1>
    </div>
    <div className="csd__team-container">
      <div className="csd__team-container_groupB">  
        <Article imgUrl={team02} date="Coordinator CSS / Research Lead" text="Ms. Noor Fatima" />
        <Article imgUrl={team03} date="Secretary CSS  &nbsp; / &nbsp; Tech Lead" text="Mr. Hasan Faraz Khan" />
        <Article imgUrl={team10} date="AI Lead" text="Mr. Mohammad Areeb"/>
        <Article imgUrl={team11} date="Graphics Lead" text="Ms. Ariba Bashar" />
        <Article imgUrl={team12} date="Social Media Coordinator" text="Ms. Fayeza Zobair"/>
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
        <Article imgUrl={team02} date="Coordinator CSS / AI Mentor" text="Ms. Noor Fatima" />
        <Article imgUrl={team09} date="Secretary CSS" text="Mr. Syed Mohib Raza" />
        <Article imgUrl={team04} date="Web Development Mentor" text="Mr. Nikhil Upadhayay"/>
        <Article imgUrl={team05} date="Machine Learning Mentor" text="Mr.Mohammad Aquib" />        
     </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className="csd__teampage-container">      
      <div className="csd__teampage-container_groupB">
        <Article imgUrl={team03} date="Python / Backend Dev Mentor" text="Mr. Hasan Faraz Khan" />   
        <Article imgUrl={team06} date="App Development Mentor" text="Ms. Zuha Khan" />
        <Article imgUrl={team07} date="Senior Student Mentor" text="Mr. Shoaib Nusrat"/>
        <Article imgUrl={team08} date="Senior Student Mentor" text="Ms. Maryam"/>      
     </div>
    </div>
  </div>
);

export default Team;