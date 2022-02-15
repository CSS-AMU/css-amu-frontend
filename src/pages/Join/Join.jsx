import React from 'react';
import { useState } from "react";

import './join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [pending, setpending] = useState(false)
  const [thank, setThank] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const join = { name, email, course }
    setpending(true)

    fetch('/join/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(join)
      }).then((res)=>{
        //   console.log("New blog added");
            setpending(false)
            setThank(true)
      }).catch(err => {
        if (err.name === 'AbortError'){
            console.log("fetch aborted")
        } else {
            setpending(false)
            console.log(err.message)
        }    
    })
  }

  return (
    <div className="csd__join section__padding" id="join">
      <div className="csd__join-heading">
        <h1 className="gradient__text">Join Us !<br /> Become a member</h1>
      </div>
      { !thank &&  <div className="csd__join-content__input">
      <form className="csd__join-content__input" onSubmit={handleSubmit}>
            <input type="text" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name" 
            />
            <input type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
            />
            <input type="text" 
              required 
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Your Course and Year" 
            />
            { !pending && <button >Submit Details</button>}
            { pending && <button disabled >Adding....</button> }
        </form>
      </div>
      }
      { thank && <div className="csd__join-heading">
        <h1 className="gradient__text">Thank you !!</h1>
      </div>}
    </div>
  );
}

export default Join;