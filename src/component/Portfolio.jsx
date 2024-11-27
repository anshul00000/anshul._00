import React from 'react'

// import Menu_bar from './Menu_bar'

// import './App.css'
// import './media.css'

import Menu_bar from './Menu_bar'
import Landingpage from './Landingpage'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import SmoothScroll from './SmoothScroll'
import Certificate from './Certificate'


function Portfolio() {
  return (
   <>


<Menu_bar/>
  <Landingpage />
  <Projects/>
  <Skills/>
  <Certificate />
  <About/>
  <Contact/>
  <Footer/>
   
   </>
  )
}

export default Portfolio
