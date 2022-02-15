import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="csd__blog section__padding" id="blog">
    <div className="csd__blog-heading">
      <h1 className="gradient__text">A walk through the history<br /> of the club.</h1>
    </div>
    <div className="csd__blog-container">
      <div className="csd__blog-container_groupB">
        <Article imgUrl={blog01} date="December 2018: The Inception" text="The Area of Dominant Coders Club (ADC) came into existence in 2018. Initially, it involved 27 registered members from B.Sc. (Hons.) Computer Applications I and II Year and the Coordinators were from the final year of the same course: Mr. Arish Rehman, Mr. Mohammad Areeb, Mr. Mohammad Umair, and Mr. Jaanbaaz Akhtar. " />
        <Article imgUrl={blog02} date="September 2019: The Revision" text="With the newly assigned Coordinator as Miss. Noor Fatima and Secretary Mr. Syed Mohib Raza, both from B.Sc. (Hons.) Computer Applications final year, the ADC Club came back into action in a new form. With the addition of B.Sc. and MCA Students as members, the sphere of ADC’s affection spread to the Faculty of Science as well."/>
        <Article imgUrl={blog03} date="March 2021: The Recognition" text="By the efforts of the Club and the Chairperson of the Department of Computer Science, AMU, the club was granted recognition and financial support by the Hon’able Vice-Chancellor, Aligarh Muslim University, and the club was renamed as the Computer Science Society." />
        <Article imgUrl={blog04} date="June 2021: Meeting of CSS" text="Prof. Aasim Zafar scrutinized the tentative by-laws of the society and gave his inputs to improve it. He suggested the society's primary objective should be to provide a platform to students for showcasing their creativity and innovative ideas." />
      </div>
    </div>
  </div>
);

export default Blog;