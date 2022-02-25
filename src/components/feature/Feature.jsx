import React from 'react';
import './feature.css';

const Feature = ({ title, text, link }) => (
  <div className="csd__features-container__feature">
    <div className="csd__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="csd__features-container_feature-text">
      <a href={link} target="_blank" rel="noreferrer">
      <p>{text}</p>
      </a>
    </div>
  </div>
);

export default Feature;