import React, { useState } from 'react'

function Projects() {

   const [project , Set_projects] = useState([
    {   name: "SKILLFOLIO",
        image : "skillfolio.png",
        github : "",
        live :"https://anshulportfolio00.netlify.app/",
        discription : "✓ Developed a dynamic web application using the MERN stack, focusing onefficient front-end and back-end communication.  ✓ ntegrated MongoDB to store and manage user data, and set up API endpointswith Express and Node.js for backend operations.✓ Deployed the backend code to Render.com for live demonstration and testing.", 
    },
    {   name: "RENTASTIC",
        image : "rentastic.png",
        github : "",
        live :"http://rentastic.rf.gd/",
        discription : "Built using PHP, CSS, HTML, and MySQL, Rentastic is designed to provide a seamless and user-friendly experience for anyone looking to rent a car.", 
    },
    {   name: "Basic Calculator",
        image : "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        github : "",
        live :"https://www.polygwalior.ac.in/student/21017C04010_54.php",
        discription : "Built using html , css , javascripta  basic calculator to ferform all basic task ", 
    },
    {   name: "Rock Paper Scissors",
        image : "https://assets.skyfilabs.com/images/blog/rock-paper-scissor-game-using-python.webp",
        github : "",
        live :"https://www.polygwalior.ac.in/student/21017C04010_51.php",
        discription : "Only For Fun and use some javascript functions ", 
    },
    {   name: "Beauty Parlour",
        image : "https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        github : "",
        live :"https://www.polygwalior.ac.in/student/21017C04010_52.php",
        discription : "For beauty parlour to see images of work", 
    },
    {   name: "Clock",
        image : "https://images.unsplash.com/photo-1611074083266-08891d1a194f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        github : "",
        live :"https://www.polygwalior.ac.in/student/21017C04010_55.php",
        discription : "For Only Designing", 
    },
    {   name: "To~do List",
        image : "https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg",
        github : "",
        live :"https://www.polygwalior.ac.in/student/21017C04010_56.php",
        discription : "For add Work List ", 
    },
    {   name: "React app",
        image : "https://miro.medium.com/v2/resize:fit:1400/1*CQLVprfpDWfpzoG0tEp9iw.png",
        github : "",
        live :"https://anshulreact.netlify.app/",
        discription : "For animated Cards", 
    },
   ])

  return (
   <>
   <section id="projects_section" >
      <h1 id="projects" className="project_h1">some of my work that I've done</h1>

      <div id="projects_container">

      
      {
        project.map((item , index)=>{
            return (
              <>
                  


     <div key={index} data-aos="zoom-in-down" className="project_card" data-img ="https://plus.unsplash.com/premium_photo-1677109899683-9d449c66d9e8?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"> 
        <div className="card_img " style={{backgroundImage: `url(${item.image})`, backgroundcolor : "black"} }></div>

  <div className='card_detel_box'>

        <div className="card_detel">
            <a href={item.github} target="_blank">
            <ion-icon class="git_icon" name="logo-github"></ion-icon>
           </a>
            <p>{item.name}</p>
            <p>{item.discription}</p>
        </div>

        <div className='card_btns'>
            <a href={item.github} target="_blank"> <button className="card_button" type="button">    <ion-icon class="git_icon_btn" name="logo-github"></ion-icon> Git-hub </button> </a> 
            <a href={item.live} target="_blank"> <button className="card_button" type="button"><ion-icon class="git_icon_btn" name="globe-outline"></ion-icon> Live</button> </a>
        </div>

 </div>
      </div>




                   
             </>
            )
        })
      }


        {/* <div id="project_img"></div> */}
{/*     
       <div data-aos="zoom-in-down" className="project_card" data-img ="https://plus.unsplash.com/premium_photo-1677109899683-9d449c66d9e8?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"> 
        <div className="card_img card_img1"></div>

  <div className='card_detel_box'>

        <div className="card_detel">
            <a href="#">
            <ion-icon className="git_icon" name="logo-github"></ion-icon>
           </a>
            <p>Basic Calculator </p>
            <p>to ferform all basic task</p>
        </div>
        <div>
            <a href="https://www.polygwalior.ac.in/student/21017C04010_54.php" target="_blank"> <button className="card_button" type="button">Live Demo</button> </a>
        </div>

 </div>
      </div>

       <div data-aos="zoom-in-down" className="project_card" data-img="https://wallpapercave.com/wp/wp8121942.png">
        <div className="card_img card_img2"></div>
        <div className='card_detel_box'>
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
      </div> */}
     
       
    </div>
  </section>

   </>
  )
}

export default Projects
