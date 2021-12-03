// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

import Header from './components/Header';
import Carousel from './components/Carousel';
import Offers from './components/Offers';
import Footer from './components/Footer';

import axios from 'axios'

function App() {
  const [navbar, setNavbar] = useState([])
  const [carousels, setcarousels] = useState([])
  const [offers, setOffers] = useState([])

  const [appStatus, setAppStatus] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3000/api')
      .then(({ data }) => {
        
        setNavbar(data.navbar);
        setOffers(data.cards);
        setcarousels(data.carousel);

        setAppStatus(true)

      }, (err) => {
        setAppStatus(false)
      })
  }, [])

  if (appStatus === true) {
    return (
      <div>
        <Header navbar={navbar} />
        <div className="container">
          <Carousel carousels={carousels} />
          <Offers offers={offers} />
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div id="main">
        <div className="down">
          <h1>APPLICATION IS DOWN RIGHT NOW</h1>
          <br />
          <h2>VISIT LATER</h2>
        </div>
      </div>
    );
  }
}

export default App;
