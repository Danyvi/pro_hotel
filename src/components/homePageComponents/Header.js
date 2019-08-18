import React from 'react';
import Hero from '../globals/Hero';
import homeImg from '../../images/homeBcg.jpeg';
// import aboutImg from '../../images/aboutBcg.jpeg'
import Banner from '../globals/Banner';
import { PrimaryBtn } from '../globals/Buttons';

const Header = () => {
  return (
    <Hero img={ homeImg }>
      <Banner 
        greeting="welcome to" 
        title="beachwalk resort" 
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, libero saepe ab necessitatibus dolores molestias."
      >
        {/* <PrimaryBtn t="1rem">
          view details
        </PrimaryBtn> */}

        <PrimaryBtn t="1rem" as="a" href="https://www.google.com" target="_blank">
          view details
        </PrimaryBtn>
      </Banner>
    </Hero>
  )
};

export default Header;
