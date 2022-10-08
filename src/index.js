import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Slogan from './components/Slogan';
import Program from './components/Program';
import Timetable from './components/Timetable';
import Map from './components/Map';
import Rule from './components/Rule';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slogan />
    <Program />
    <Timetable />
    <Map />
    <Rule />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
