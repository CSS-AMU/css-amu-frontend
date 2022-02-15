import React from 'react';
import Feature from '../../components/feature/Feature';
import './achievements.css';

const achievementsData = [
  {
    title: 'Connect with CSS AMU',
    text: 'Meet other students on campus interested in similar projects/ technologies. It consists of a team of B.Sc. (Hons.), MCA and M.Sc. (Cyber Security) Students of the University having technical insight and a passion for programming.',
  },
  {
    title: 'Why Join ?',
    text: 'CSS AMU activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.',
  },
  {
    title: 'Grow with CSS AMU',
    text: 'In addition to regular informative sessions, the club also organizes workshops, hackathons, and internships at regular intervals. Apply your new learnings and connections to build great solutions for local problems.',
  },
];

const Achievements = () => (
  <div className="csd__achievements section__padding" id="achievements">
    <div className="csd__achievements-heading">
      <h1 className="gradient__text">Official Club of Department of Computer Science, Faculty of Science</h1>
      <p>Many of our students have succeeded to find recognition in programs of Organizations like Google, Microsoft,Outreachy, IEEE, MITACS, Fellowship.ai to institutions like IITs, IIITS, NITs, etc.</p>
    </div>
    <div className="csd__achievements-container">
      {achievementsData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Achievements;