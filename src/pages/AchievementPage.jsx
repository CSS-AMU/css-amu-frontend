import React from 'react';
import Feature from '../components/feature/Feature';
import useFetch from '../useFetch';
import './achievementpage.css';

const AchievementPage = () => {

  const { data, pending, error } = useFetch("https://cssamu.pythonanywhere.com/api/v1/achievements/?format=json")

  return (
    <div className="csd__achievementpage section__padding" id="achievements">
      <div className="csd__achievementpage-heading">      
        <h1 className="gradient__text">Our Team and Members have earned appreciation globally !</h1>
        <p>Many of our students have succeeded to find recognition in programs of Organizations like Google, Microsoft,Outreachy, IEEE, MITACS, Fellowship.ai to institutions like IITs, IIITS, NITs, etc.</p>
        <br />
        { error && <div className="gradient__text">{ error }</div> }
        { pending && <h1 className="gradient__text">Please wait... Fetching data from server</h1> }
      </div>
      { data &&  <div className="csd__achievementpage-container">
        {data.map((item, index) => (
          <Feature title={item.name} text={item.description} key={index} />
        ))}
      </div>}
    </div>
  );
}

export default AchievementPage;