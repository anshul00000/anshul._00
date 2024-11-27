import React from 'react'

function About() {
  return (
    <>
<div className='about_main_div' id='details'>
{/* <h1 className='about_h1 glow'>About me</h1> */}
<h1 className='about_h1 glow'>Education</h1>
<ul className='about_ul'>
    <li  >
        <div className="date"></div>
        <div className="title">hyy <span style={{fontSize:'15px'}}>&#10549;</span></div>
        <div className="descr">My Name is Anshul Chaurasiya </div>
    </li>
    <li >
        <div className="date">2021</div>
        <div className="title">10<sup>th</sup> <span style={{fontSize:'15px'}}>&#10549;</span></div>
        <div className="descr">10<sup>th</sup> GOVT.HIGH SCHOOL CHANDERA KHAS (M.P) .</div>
    </li>
    
    <li >
        <div className="date">2021</div>
        <div className="title">3 Year Diploma <span style={{fontSize:'15px'}}>&#10549;</span></div>
        <div className="descr">pursuing 3 Year Diploma Dr. B.R. Ambedkar Polytechnic College Gwalior</div>
    </li>
    <li >
        <div className="date">2023</div>
        <div className="title">12<sup>th</sup> <span style={{fontSize:'15px'}}>&#10549;</span></div>
        <div className="descr">12<sup>th</sup> GOVT.HIGH SCHOOL CHANDERA KHAS (M.P)  (Private) .</div>
    </li>
    
</ul>

</div> 
    </>
  )
}

export default About
