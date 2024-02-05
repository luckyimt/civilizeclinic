import React ,{useRef} from 'react'
import '../form.css'
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';


function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
      // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
    emailjs.sendForm('service_odjunrm', 'template_xgmtiw7', form.current,
    'XF3fYsjaKmD_fGf9o')
    .then((result) => {
    console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    };
  return (
    <section id="contacts">
    <center>
      
        <div className="lower-sections">
          
          <form ref={form} onSubmit={sendEmail} className="form-div">

          <div className="form-title"><h1>Contact Form</h1></div> 
          <br></br>
        <input
          id="email address"
          type="email"
          name="from_email"
          placeholder="Your email address to get our message."
        />
        <br></br>
        <label htmlFor="name"></label>
        <br></br>
        <input
          id="name"
          type="text"
          name="from_name"
          placeholder="Tell us your name."
        />
        <br></br>
        <label htmlFor="message"></label>
        <br></br>
        <textarea
          id="message"
          type="text"
          name="message"
          placeholder="Leave your message here, we will get back to you."
        />
            
        <center>
          <button type="submit" >Submit</button>
        </center>
        
          </form>
          <br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br>
        <div className="map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.121982554368!2d99.03952063947891!3d18.837243259498408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da258b16c69ee9%3A0xeb918330c7c7ccc8!2sCivilize%20Clinic!5e0!3m2!1sth!2sth!4v1703909435853!5m2!1sth!2sth" width="600" height="500" title="Civilize Clinic Google Map"></iframe>
        </div>
      

      <div className="footer">
            <h1 className="footer__title">Beauty Clinic<span>.</span>co</h1>
            <div className="footer__description">
            <h1>The most
            confidential esteem.</h1>
            </div>
          <center>
            <div className="footer__content grid">
              <div>
                <div className="footer__subtitle"><h1>Chiangmai</h1></div>
                <div className="footer__information">
                  <h1>Ptt.station Sansai Noi.</h1>
                </div>
              </div>
            <div>
                <div className="footer__subtitle"><h1>0801593971</h1></div>
                <div className="footer__information">
                  <h1>osakaunits@gmail.com</h1>
                </div>
            </div>
            <div>
                <div className="footer__subtitle"><h1>Office</h1></div>
                <div className="footer__information">
                  <h1>TU - SAT 8.35: - 12:05</h1>
                </div>
              </div>
            </div>
            
        </center>
    
          <center>
        <div className="footer__group"> 
          <ul className="footer__social">
            <a href="https://line.me/ti/p/SSFpL2ED3U" className="footer__social-line"><Icon icon="mingcute:line-app-line"/>
            </a>
           
       
          </ul>
          
              <div className="footer__copy"><h1> &#169; Sanaki. All rights reserved </h1></div>
            </div>
            </center>
          </div>
          
          </div>
      </center>
      
    </section>
    
  )
}
export default Form