import React, { useEffect } from 'react'

function Snake() {


    


    useEffect(()=>{


        //   const foodSound = new Audio('music/food.mp3');
        //  const gameOverSound = new Audio('music/gameover.mp3');
         const moveSound = new Audio('music/move.mp3');
         const musicSound = new Audio('music/music.mp3');

         
         
         window.addEventListener('keydown', e =>{
             // inputDir = {x: 0, y: 1} // Start the game
             moveSound.play();
             musicSound.play();
            switch (e.key) {
                case "ArrowUp":
                    console.log("ArrowUp");
                    // inputDir.x = 0;
                    // inputDir.y = -1;
                    break;
        
                case "ArrowDown":
                    console.log("ArrowDown");
                    // inputDir.x = 0;
                    // inputDir.y = 1;
                    break;
        
                case "ArrowLeft":
                    console.log("ArrowLeft");
                    // inputDir.x = -1;
                    // inputDir.y = 0;
                    break;
        
                case "ArrowRight":
                    console.log("ArrowRight");
                    // inputDir.x = 1;
                    // inputDir.y = 0;
                    break;
                default:
                    break;
            }
        
        });


    },[])


  return (
    <div className='snake_bg'>
     <div id="board">

     </div>
    </div>
  )
}

export default Snake
