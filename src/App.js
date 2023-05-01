import React from 'react';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/about/about';
import Skill from './components/skills/skills';
import Qualification from './components/qualification/qualification';
import Project from './components/projects/project';
import Contact from './components/contact/contact';
import ScrollTop from './components/scrollTop/scrollTop';
import './App.css'

import LoadingImg from './assests/loading.gif'

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
  offset: 80,
});


function App() { 

  //Loading Screen
  window.onload = fadeOut;
  
  function fadeOut() {
      setInterval(loader, 500);
  }
  function loader() {
    document.querySelector('.loading').classList.add('fade-out');
  }

  

  return (

    <>

      <div class="loading">
        <img draggable="false" src={LoadingImg} alt="Loading..." />
      </div>

      <Header />

      <main className="main">

        <Home />
        <About />
        <Skill />
        <Qualification />
        <Project />
        <Contact />

      </main>
      <ScrollTop/>

    </>
  );
}

export default App;
