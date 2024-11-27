import React from 'react'

import {NavLink , Link} from "react-router-dom";


function Error() {
  return (
    <>
    {/* <h1>Page not abal</h1> */}

    <div className="jc-elevator">
      <div id="myBtn" className="jc-floor">
         <h3>404</h3>
      </div>
      <div id="doors" className="jc-doors">
         <div>Oops. Wrong floor.</div>
         <div>Are you lost? Press down button to go back to the   <NavLink  to="/">lobby</NavLink> </div>
      </div>
      <div className="jc-switch">
         <a href="/"></a>
         <a href="/"></a>
      </div>
   </div>


    </>
  )
}

export default Error
