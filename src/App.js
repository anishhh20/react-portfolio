import React from 'react';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/about/about';
import Skill from './components/skills/skills';
import Qualification from './components/qualification/qualification';
import Project from './components/projects/project';
import Contact from './components/contact/contact';
import ScrollTop from './components/scrollTop/scrollTop';
import Footer from './components/footer/footer';
import './App.css'

import LoadingImg from './assests/loading.gif'

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
  offset: 60,
});


function App() { 

  //Loading Screen
  window.onload = loader;
  
  function loader() {
    document.querySelector('.loading').classList.add('fade-out');
  }

  

  return (

    <>

      <div class="loading">
        <h1 className="load__text">Wait.. It will worth it!</h1>
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
        <Footer />

      </main>
      <ScrollTop/>

    </>
  );
}

export default App;
