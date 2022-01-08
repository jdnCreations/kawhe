import React from 'react';
import beans from '../assets/beans.png';
import map from '../assets/mapwithbubble.png';

const Content = () => {
  return (
    <div id='content'>
      <div id='ourstory'>
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br />
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <img src={beans} alt='bag of coffee beans' />
      </div>
      <div id='findus'>
        <h2>Find us</h2>
        <p>
          828 Yourbusiness Street,
          <br /> Supercoolarea, 9999,
          <br /> Country, State
        </p>
        <img src={map} alt='a map with location of store' />
      </div>
    </div>
  );
};

export default Content;
