import React, { useEffect } from 'react'

function Contact() {

    useEffect(() => {
        const inputs = document.querySelectorAll(".input");

        function focusFunc() {
          let parent = this.parentNode;
          parent.classList.add("focus");
        }
        
        function blurFunc() {
          let parent = this.parentNode;
          if (this.value == "") {
            parent.classList.remove("focus");
          }
        }
        
        inputs.forEach((input) => {
          input.addEventListener("focus", focusFunc);
          input.addEventListener("blur", blurFunc);
        });
        
      });


  return (
    <>

<div className="contact_container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="." />
      <div className="form">
        <div className="contact-info">
          <h3 className="contact_title">Let's get in touch</h3>
          <p className="text">
             For any information
          </p>

          <div className="info">
            <div className="information">
              {/* <i className="fas fa-map-marker-alt"></i> */}
              <ion-icon class='contact_icon' name="location-sharp" ></ion-icon>  &nbsp; &nbsp;
              <p>Gwalior (M.P)</p>
            </div>
            <div className="information">
              {/* <i className="fas fa-envelope"></i> &nbsp &nbsp */}
              <ion-icon class='contact_icon' name="mail-unread-sharp"></ion-icon> &nbsp; &nbsp;

              <p>anshulchaurasiya05@gmail.com</p>
            </div>
            <div className="information">
              {/* <i className="fas fa-phone"></i>&nbsp; &nbsp;   */}
              <ion-icon class='contact_icon' name="call-sharp"></ion-icon>&nbsp; &nbsp;  
              <p>+91 8964049390</p>
            </div>
            <div className="information">
              {/* <i className="fas fa-phone"></i>&nbsp; &nbsp;   */}
              <ion-icon class='contact_icon' name="call-sharp"></ion-icon>&nbsp; &nbsp;  
              <p>+91 6266842027</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="https://github.com/anshul00000" target="_blank">
                {/* <i className="fab fa-facebook-f"></i> */}
                <ion-icon class='Contact_s_logo' name="logo-github"></ion-icon>
              </a>
              <a href="https://www.linkedin.com/in/anshul-chaurasiya-82243a25b/" target="_blank">
                {/* <i className="fab fa-twitter"></i> */}
                <ion-icon class='Contact_s_logo' name="logo-linkedin"></ion-icon>
              </a>
              <a href="https://www.instagram.com/anshul._00/" target="_blank">
                {/* <i className="fab fa-instagram"></i> */}
                <ion-icon class='Contact_s_logo' name="logo-instagram"></ion-icon>
              </a>
              <a href="https://www.facebook.com/anshulchaurasiyaac" target="_blank">
                {/* <i className="fab fa-linkedin-in"></i> */}
                <ion-icon class='Contact_s_logo' name="logo-facebook"></ion-icon>
              </a>
              <a href="https://twitter.com/anshul__00" target="_blank">
                {/* <i className="fab fa-linkedin-in"></i> */}
                <ion-icon class='Contact_s_logo' name="logo-twitter"></ion-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="contact_title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="contact_btn" />
          </form>
        </div>
      </div>
    </div>

    
    </>
  )
}

export default Contact
