import React, { useState } from 'react'

function Menu_bar() {

    const [a,b] = useState(false);   
    const styles = {
        display : a ? 'block': 'none' ,
        // fontWeight: isImportant ? 'bold' : 'normal',
      };

  return (
  


    <>
 
    <div onClick={()=>(b(!a))} className="filebox" id="filebox_icons">
        <ion-icon  style={{ display : a ? 'none' : 'block'}} class="filebox_icon" name="list-sharp" id="filebox_open"></ion-icon>
        <ion-icon  style={{ display : a ? 'block': 'none'}} class="filebox_icon filebox_close" name="play-back-sharp" id="filebox_close"></ion-icon>
    </div>



    <header>
        <div className="header" id="header_1" style={{ left : a ?  '20px' : '-400px'}}>
            <nav>
                <ul className="ul">

                    <li>
                        <span className='mainicon_div'><a id="list" className="homee"  href="https://www.polygwalior.ac.in/student/21017C04010_50.php">
                            <span className='icon_div'>
                                {/* <ion-icon id='001'  class ='icon' name='home-outline'></ion-icon> <br/> */}
                                <p className="iconname">Home</p>
                             </span>
                             </a>
                        </span>
                    </li>
                    <li>
                        <span className='mainicon_div'><a id="list" className="homee"  href="https://www.polygwalior.ac.in/student/21017C04010_50.php">
                            <span className='icon_div'>
                                {/* <ion-icon id='001'  class ='icon' name='list-outline'></ion-icon> <br/> */}
                                <p className="iconname">Programs</p>
                             </span>
                             </a>
                        </span>
                    </li>

                    <li>
                        <span className='mainicon_div'><a id="list" className="homee"  href="https://www.polygwalior.ac.in/student/21017C04010_50.php">
                            <span className='icon_div'>
                            {/* <ion-icon  class="icon" name="images-outline"></ion-icon> <br /> */}
                                <p className="iconname" >Gallary</p>
                             </span>
                             </a>
                             
                        </span>
                    </li>
                

                </ul>



            </nav>

            <span>
           

                <label for="themcheckbox">

                    {/* <input type="checkbox"  className="them_checkbox">  */}
                    <span class="themicon" id="themcheckbox" ><ion-icon name="contrast-outline" class="themicon_i"></ion-icon> </span>

                </label>
            </span>

        </div>
    </header>


    
    </>
  )
}

export default Menu_bar
