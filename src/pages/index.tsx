import React from 'react';
import Greetings from '../containers/Greetings';
import About from '../containers/About';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="w-1/4">
        <Navigation />
      </div>
      <div className="flex flex-col w-3/4">
        <Greetings />
        <About />
      </div>
    </div>
  );
}
