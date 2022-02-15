import React from 'react'
import { Team, Events, Achievements, Blog, CSSAMU, Header} from '../containers';
import { CTA, Brand } from '../components';

const Home = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      <CSSAMU />
      <Achievements />
      <Events />
      <CTA />
      <Blog />
      <Team />
    </div>
  )
}

export default Home;