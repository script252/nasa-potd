import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import './App.css';

import PictureOfTheDay from './components/picture-of-the-day/PictureOfTheDay.js';

function PictureOfTheDayView() {

  const API_URL = 'https://api.nasa.gov/planetary/apod';
  const API_KEY = 'DEMO_KEY';

  const { year, month, day } = useParams();
  
  const getDate = () => {
    try {
      return year && month && day ? new Date(year, parseInt(month) - 1, day) : new Date();
    } catch (error) {
      return new Date();
    }
  }

  return (
    <PictureOfTheDay
      apiUrl={API_URL}
      apiKey={API_KEY}
      date={getDate()}
    ></PictureOfTheDay>
  )
}

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={"/:year?/:month?/:day?"} render={ () => (
          <div className="App">
            <header className="App-header">
              <PictureOfTheDayView/>
            </header>
          </div>
        )} />
      </Switch>
    </Router>
  );
}

export default App;