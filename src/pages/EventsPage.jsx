import React from 'react';
import Article from '../components/article/Article';
import '../containers/blog/blog.css';
import useFetch from '../useFetch';

const EventsPage = () => {
  const { data, pending, error } = useFetch("https://cssamu.pythonanywhere.com/api/v1/events/?format=json")

  return (
    <div className="csd__blog section__padding" id="blog">
      <div className="csd__blog-heading">
        <h1 className="gradient__text">Events conducted by <br />Computer Science Society</h1>
        <br />
        { error && <div className="gradient__text">{ error }</div> }
        { pending && <h2 className="gradient__text">Please wait... Fetching data from server</h2> }
      </div>
      <div className="csd__blog-container">  
        { data &&  <div className="csd__blog-container_groupB">
          {data.map((item, index) => (
            <Article imgUrl={item.img} date={item.title} text={item.description} key={index}/>
          ))}
        </div>}
      </div>
    </div>
  );
}


export default EventsPage;