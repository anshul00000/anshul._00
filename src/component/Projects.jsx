import React from 'react'

function Projects() {
  return (
   <>
   <section id="projects_section">
      <h1 className="project_h1">some of my work that I've done</h1>

      <div id="projects_container">
        {/* <div id="project_img"></div> */}
    
       <div data-aos="zoom-in-down" className="project_card" data-img ="https://plus.unsplash.com/premium_photo-1677109899683-9d449c66d9e8?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"> 
        <div className="card_img card_img1"></div>
        <div className="card_detel">
            <a href="#">
            <ion-icon className="git_icon" name="logo-github"></ion-icon>
           </a>
            <p>Basic Calculator</p>
            <p>to ferform all basic task</p>
        </div>
        <div>
            <a href="https://www.polygwalior.ac.in/student/21017C04010_54.php" target="_blank"> <button className="card_button" type="button">Live Demo</button> </a>
        </div>
      </div>

       <div data-aos="zoom-in-down" className="project_card" data-img="https://wallpapercave.com/wp/wp8121942.png">
        <div className="card_img card_img2"></div>

        <div>
            <a href="#">
            <ion-icon className="git_icon" name="logo-github"></ion-icon>
           </a>
            <p>Rock Paper Scissors</p>
            <p>Only For Fun</p>
        </div>
        <div>
            <a href="https://www.polygwalior.ac.in/student/21017C04010_51.php" target="_blank"> <button className="card_button" type="button">Live Demo</button> </a>
        </div>
      </div>
     
       <div data-aos="zoom-in-down" className="project_card" data-img="https://images.unsplash.com/photo-1631214499500-2e34edcaccfe?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div className="card_img card_img3"></div>

        <div>
            
            <a href="#">
            <ion-icon className="git_icon" name="logo-github"></ion-icon>
           </a>
            <p>Web Page</p>
            <p>For Beauti Parlour</p>
        </div>
        <div>
            <a href="https://www.polygwalior.ac.in/student/21017C04010_52.php" target="_blank"> <button className="card_button" type="button">Live Demo</button> </a>
        </div>
      </div>

       <div data-aos="zoom-in-down" className="project_card" data-img="https://plus.unsplash.com/premium_photo-1676999224507-4da59054f485?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div className="card_img card_img4"></div>

        <div>
            <a href="#">
            <ion-icon className="git_icon" name="logo-github"></ion-icon>
           </a>
            <p>Clock </p>
            <p>For Only Designing</p>
        </div>
        <div>
            <a href="https://www.polygwalior.ac.in/student/21017C04010_55.php" target="_blank"> <button className="card_button" type="button">Live Demo</button> </a>
        </div>
      </div>


       <div data-aos="zoom-in-down" className="project_card" data-img="https://images.unsplash.com/photo-1514782831304-632d84503f6f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div className="card_img card_img5"></div>

        <div>
            <a href="#">
            <ion-icon className="git_icon" name="logo-github"></ion-icon>
           </a>
            <p>To~do List </p>
            <p>For add your List</p>
        </div>
        <div>
            <a href="https://www.polygwalior.ac.in/student/21017C04010_56.php" target="_blank"> <button className="card_button" type="button">Live Demo</button> </a>
        </div>
      </div>

       <div data-aos="zoom-in-down" className="project_card" data-img="https://images.unsplash.com/photo-1629338129605-e48e4fd6df4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div className="card_img card_img6"></div>

        <div>
            <a href="#">
            <ion-icon className="git_icon" name="logo-github"></ion-icon>
           </a>
            <p>React app </p>
            <p>For animated Cards</p>
        </div>
        <div>
            <a href="https://anshulreact.netlify.app/" target="_blank"> <button className="card_button" type="button">Live Demo</button> </a>
        </div>
      </div>
     
       
    </div>
  </section>

   </>
  )
}

export default Projects
