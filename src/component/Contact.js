import "../css/Contact.css"
import Loader from "./Loader";
import React, {useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
 const form = useRef();
 const[Loading,setLoading]=useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_kvpm8z6', 'template_3m5dg17', form.current, 'i1WyGZbXhGH6i-U7c')
      .then((result) => {
          console.log(result.text);
          alert('email sent successfully');
          setLoading(false);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <div class="Contact">
        <h1>
          <a href="Contact"></a>Contact Us
        </h1>
      </div>
        
      <div className="form">
        <form  ref={form} onSubmit={sendEmail}>
            <table align="center">
            <tr>
                <td><input type="text" name="name" placeholder="Enter your Name" required/></td>
                </tr>
                <br></br>
                <tr>
                <td><input type="text" name="email" placeholder="Enter your email"/></td>
                </tr>
                <br></br>
                <tr>
                <td><textarea name="message" row="5" cols="25" placeholder="Enter your message"/></td>
                </tr>
                <br></br>
                <div className="but">
                <tr>
                  {
                    Loading?
                    "":
                 
                    <button>Send Message</button>
                  }
                </tr>
                </div>
                </table>
               
                {
                Loading?
                <Loader/>:null
                }
       </form>
</div>

       
      
    </>
  );
}
export default Contact;
