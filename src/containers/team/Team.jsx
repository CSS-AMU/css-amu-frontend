import React from 'react';
import Article from '../../components/article/Article';
import { team01, team02, team03, team10, team11, team12, team_asm, team_bkr,
         team_fsl, team_shl, team_sjd, team_swl, team13, team14, team16, team17, team18, team19, team20, team21, team22, team23} from './imports';
import './team.css';

const Team = () => (
  <div className="csd__team section__padding" id="team">
    <div className="csd__team-heading">
      <h1 className="gradient__text">Meet the Team !<br /> Introducing the people behind CSS AMU.</h1>
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
        <Article imgUrl={team13} date="Coordinator CSS" text="Ms. Ghazala Zameer" />
        <Article imgUrl={team14} date="Secretary CSS" text="Ms. Laeeba Javed" />
        <Article imgUrl={team16} date="Web and Tech Lead" text="Mr. Ziaul Mustafa" />
        <Article imgUrl={team17} date="Graphics Team" text="Ms. Rufaida Haq"/>
        <Article imgUrl={team18} date="Graphics Team" text="Ms. Yusrah Afaq"/>
        <Article imgUrl={team19} date="Event Coordinator" text="Mr. Aman Tariq" />
        <Article imgUrl={team20} date="Social Media Team" text="Mr. Aftab Ansari"/>
        <Article imgUrl={team21} date="Social Media Team" text="Mr. Mohd. Saad"/>
        <Article imgUrl={team22} date="Social Media Team" text="Mr. Mohd. Saif"/>
        <Article imgUrl={team23} date="Volunteer" text="Mr. Ahmad Mustafa"/>
     </div>
    </div>
    <br></br>
    <br></br>
    <br></br>



    <div className="csd__teampage-heading">
      <h1 className="gradient__text">PREVIOUS STUDENT TEAM 2020-21 </h1>
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
  </div>
);

export default Team;
