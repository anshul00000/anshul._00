import React from 'react'

function Landingpage() {
  return (
  
    <>
      
      <div className="landing_div">
        <p className='hyy'>Hi There, I am <span style={{fontSize:'25px'}}>&#10549;</span> </p>
        <h1>ANSHUL CHAURASIYA</h1>
        <h3>Full-Stack-Developer</h3>


        <div className='des_title'>
         <p>I am currently an Engineering Student & I love to build Projects related to Web & Problem    Solving.I love to learn about New Stuff on regular basis.
           proficient in frontend and backend development with expertise in  HTML, CSS, JavaScript,PHP,  MySQL , React , mongodb . With experience in designing user-friendly interfaces, creating efficient backend systems, and implementing robust database management solutions .
        </p>
        </div>
   
        <div className="landing_img">

          <div>
            
          <a href="/cv.pdf" target='_blank'> <button className='btn'> Curriculum Vitae _ <ion-icon class='cv' name="newspaper-sharp"></ion-icon></button></a>
          
          </div>

          {/* <div>
          <img src="https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp" alt="." />
          </div> */}

<div className="position">
            <div className="img_div">
               <img data-aos="fade-down-left" className="img_f" src="/mypic.png" alt="my_photo" />
            </div>
            {/* <h1>ANSHUL</h1>  */}
            <div className="img_div_border"></div>
         {/* <div className="photoname"><h1>ANSHUL</h1>
         <p>Fround-end-Developer</p></div> */}
   </div>

        </div>


      </div>
 
    </>
  )
}

export default Landingpage
