import { useState } from 'react'

import './App.css'
import './media.css'
import Menu_bar from './component/Menu_bar'
import Landingpage from './component/Landingpage'
import Projects from './component/Projects'
import Skills from './component/Skills'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  <Menu_bar/>
  <Landingpage />
  <Projects/>
  <Skills/>
  <About/>
  <Contact/>
  <Footer/>
  
  {/* <div className="demo_div"></div> */}


    </>
  )
}

export default App
