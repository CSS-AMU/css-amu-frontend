import React from 'react'
import { Footer } from './containers';
import { Navbar } from './components';
import Home  from './pages/Home';
import AchievementPage from './pages/AchievementPage';
import Publications from './pages/Publications';
import EventsPage from './pages/EventsPage';
import TeamPage from './pages/TeamPage/TeamPage';
import Join from './pages/Join/Join';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';


const App = () => {
  return (
    <Router>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/achievements">
        <AchievementPage/>
      </Route>
      <Route path="/events">
        <EventsPage/>
      </Route>
      <Route path="/publications">
        <Publications/>
      </Route>
      <Route path="/team">
        <TeamPage/>
      </Route>
      <Route path="/join">
        <Join/>
      </Route> 
      </Switch>
      <Footer />
    </div>
    </Router>
  )
}

export default App;