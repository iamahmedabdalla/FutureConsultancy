import React from 'react';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Reasons from './components/Reasons';
import Steps from './components/Steps';
import StillLost from './components/StillLost';
import ReactGA from 'react-ga';

const trackingId = "UA-250257348-1";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Reasons />
      <Steps />
      <StillLost />
      <Footer />
    </div>
  );
}

export default App;
