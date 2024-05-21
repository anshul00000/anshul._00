import React, { useEffect } from 'react'

function Footer() {

    useEffect(()=>{

        // Get the bubbles container
const bubblesContainer = document.querySelector('.bubbles');

// Create bubbles
for (let i = 0; i < 50; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.setProperty('--size', `${2 + Math.random() * 2}rem`);
  bubble.style.setProperty('--distance', `${6 + Math.random() * 200}rem`);
  bubble.style.setProperty('--position', `${-5 + Math.random() * 100}%`);
  bubble.style.setProperty('--time', `${2 + Math.random() * 500}s`);
  bubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);
  bubblesContainer.appendChild(bubble);
}




    });



  return (
    <>

    {/* <h1>this i footer</h1> */}

<div className="main_footer">
    <footer class="footer">
        <div class="bubbles">
        </div>
      <div class="footer-content">
          <div class="about-logo">
            {/* <img src="/public/pngegg (21).png" alt="Your Logo"/> */}
            <h1 className='footer_tnx'>THANKYOU</h1>

          </div>
      </div>
      <div class="footer-bottom">
          &copy; 2023 | Created by Anshul Chaurasiya
      </div>
  </footer>
  {/* <svg style="position: fixed; top: 100vh;"> */}
  <svg style={{position: 'fixed', top: '100vh'}}>
    <defs>
        <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"/>
        </filter>
    </defs>
</svg>
</div>
    </>
  )
}

export default Footer
