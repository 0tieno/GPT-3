import { Footer, Header, WhatGPT3, Features, Possibility, Blog } from './containers';

import {Cta, Brand, Navbar} from './components';

import './App.css';



function App() {
  return (

    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

       <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  );
}

export default App
