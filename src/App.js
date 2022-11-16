import React from 'react';
import Header from './components/Header';
import Top from './components/Top';
import Slogan from './components/Slogan';
import Program from './components/Program';
import Timetable from './components/Timetable';
import Map from './components/Map';
import Rule from './components/Rule';
import Access from './components/Access';
import Footer from './components/Footer';
import Loading from './Loading'
import './components/animation.css'
import { useInView } from 'react-intersection-observer';

function App() {
    return(
        <div id="app">
            <Loading />
            <Header />
            <Top />
            <Slogan />
            <Program />
            <Timetable />
            <Map />
            <Access />
            <Rule />
            <Footer />
        </div>
    )
}

export default App;