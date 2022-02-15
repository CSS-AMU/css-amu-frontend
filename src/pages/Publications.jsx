import React from 'react';
import Feature from '../components/feature/Feature';
import useFetch from '../useFetch';
import './achievementpage.css';

const Publications = () => {

  const { data, pending, error } = useFetch("/publications/?format=json")
  return (
    <div className="csd__achievementpage section__padding" id="achievements">
      <div className="csd__achievementpage-heading">      
        <h1 className="gradient__text">Research publications of our students and members !</h1>
        <p>Our members have successfully presented their research work at National and International Conferences of IEEE, Springer, etc at prestigious institutions. Along with this, the journal papers are indexed in top databases like SCI, Scopus, ESCI with publishers ranging from Elsevier, Springer, Wiley, IEEE, and so on.</p>
        <br />
        { error && <div className="gradient__text">{ error }</div> }
        { pending && <h1 className="gradient__text">Please wait... Fetching data from server</h1> }
      </div>
      { data &&  <div className="csd__achievementpage-container">
        {data.map((item, index) => (
          <Feature title={item.author} text={item.details} key={index} />
        ))}
      </div>}
    </div>
  );
}

export default Publications;