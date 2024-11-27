import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Certificate() {

  gsap.registerPlugin(ScrollTrigger);


    useGSAP(()=>{

       


        // var tl = gsap.timeline({scrollTrigger : {
        //     trigger : '#certificate_div',
        //     markers : true ,
        //     start : 'top 50%',
      
        //     end : "bottom -=100%",
        
        //     scrub :true,
        //     pin : true,
        
           
        //  }})

        //  tl.fromTo(".certificate_1" ,
        //      { opacity :0 ,left : 500,rotation : 25 } ,
        //      {opacity :1 ,left : "50%", rotation : 0}
            
        //     ).fromTo(".certificate_2" ,
        //         { opacity :0 ,rigth : 500 ,rotation : -25 } ,
        //         {opacity :1 ,rigth: 50 , rotation : 0}
               
        //        ).fromTo(".certificate_3" ,
        //         { opacity :0 ,rotation : -25} ,
        //         {opacity :1 , rotation : 0}
               
        //        ).fromTo(".certificate_4" ,
        //         { opacity :0 ,rigth : 500 , rotation : 25} ,
        //         {opacity :1 ,rigth: 50, rotation : 0}
               
        //        )
        



      
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#certificate_div",
            start: "top top",
            end: "bottom -=100%",
            scrub: true,
            pin: true,
            toggleClass: "square--active",
            // markers: {
            //   startColor: "white",
            //   endColor: "white",
            // },
          },
        });


        // tl.fromTo(
        //   ".certificate_1",
        //   { opacity: 0,rotation: 25 },
        //   { opacity: 1,rotation: 0  }
        // )
        //   .fromTo(
        //     ".certificate_2",
        //     { opacity: 0 ,rotation: -25  },
        //     { opacity: 1,  rotation: 0 }
        //   )
        //   .fromTo(
        //     ".certificate_3",
        //     { opacity: 0,rotation: 25 },
        //     { opacity: 1, rotation: 0  }
        //   ).fromTo(
        //     ".certificate_4",
        //     { opacity: 0,rotation: -25 },
        //     { opacity: 1, rotation: 0 }
        //   ) ;


        tl.from( ".certificate_1",
            { opacity: 0 , x : "-50%" , y: "50%"},
          ).from(
            ".certificate_2",
                { opacity: 0, x : "50%" , y: "-50%"  },
          ).from(
            ".certificate_3",
            { opacity: 0 , x : "-50%" , y: "50%"},
          ).from(
            ".certificate_4",
            { opacity: 0 , x : "50%" , y: "-50%"},
          ) ;
     






    },[]);

  return (
    <>
    
    <div id="certificate_div">

    {/* <h1 className='certificate_h1'>hyy this is certificate Section  </h1> */}

    <img className='certificate_1' src="c.png" alt="image" />
    <img className='certificate_2' src="cpp.png" alt="image" />
    <img className='certificate_3' src="frrr_code_camp.png" alt="image" />
    <img className='certificate_4' src="greatlearning.png" alt="image" />

    </div>

    
    
    </>
  ) 
}

export default Certificate
