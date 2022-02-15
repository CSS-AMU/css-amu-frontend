import React from 'react';
import { github, gdsc } from './imports';
import './brand.css';

const Brand = () => (
  <div className="csd__brand section__padding">
    <a href="https://github.com/CSS-AMU" target="_blank" rel="noreferrer">
      <img src={github} alt="img" />
    </a>
    <a href="https://gdsc-amu.github.io/" target="_blank" rel="noreferrer">
      <img src={gdsc} alt="img"/>
    </a>
  </div>
);

export default Brand;