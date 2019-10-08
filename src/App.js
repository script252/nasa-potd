import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import PictureOfTheDay from './components/picture-of-the-day/PictureOfTheDay.js';

const API_URL = 'http://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY';

const date = new Date();

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path={"/"} render={ () => (
        <div className="App">
          <header className="App-header">
          <PictureOfTheDay
            apiUrl={API_URL}
            apiKey={API_KEY}
            date={date}
          ></PictureOfTheDay>
          </header>
        </div>
      )} />
    </Router>
  );
}

export default App;
