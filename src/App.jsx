import React from 'react';

import Nav from './components/Nav';
import Banner from './components/Banner';
// import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import VideoBackground from './components/VidBackground';
// import Contact from './components/Contact';

export default function App() {
  return (
    <div className='bg-black bg-no-repeat bg-cover overflow-hidden'>
      {/* <Header /> */}
      {/* <VideoBackground /> */}
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}
