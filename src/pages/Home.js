// snippet to create functional component created with rafc
import React from 'react';
import Header from '../components/homePageComponents/Header';
import About from '../components/homePageComponents/About';
import Rooms from '../components/homePageComponents/Rooms';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Rooms />
    </>
  )
}

export default Home;
