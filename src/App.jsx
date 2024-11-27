import { useState } from 'react'

import './App.css'
import './media.css'
import './Snake.css'


import { Route , Routes } from 'react-router-dom' 


import Menu_bar from './component/Menu_bar'
import Landingpage from './component/Landingpage'
import Projects from './component/Projects'
import Skills from './component/Skills'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import SmoothScroll from './component/SmoothScroll'
import Certificate from './component/Certificate'
import Portfolio from './component/Portfolio'
import Error from './component/Error'
import Snake from './component/Snake'
import Loader from './component/Loader'


function App() {
  // const [count, setCount] = useState(0)

  



  return (
    <>

{/* <SmoothScroll>

<div> */}

  {/* <Menu_bar/>
  <Landingpage />
  <Projects/>
  <Skills/>
  <Certificate />
  <About/>
  <Contact/>
  <Footer/> */}

  {/* <Loader /> */}

        <Routes>
               <Route  path="/" element={ <Portfolio />} />
               <Route  path="/snake" element={<Snake />} />
               <Route path="/*" element={<Error />} />
       </Routes>


  


  
  {/* </div> */}

  {/* </SmoothScroll> */}

  {/* <div className="demo_div"></div> */}


    </>
  )
}

export default App
