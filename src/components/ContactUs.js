import React from 'react';
import emailjs from "emailjs-com";
import '../ContactUs.css';
export function ContactUs(){
    function sendEmail(e)
     {
        e.preventDefault();
    emailjs.sendForm('service_6ww2usi', 'template_40an75n', e.target, 'user_uZ4acYNMJz7HACxrHFutc')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    }
    return (
        
            <div className="contact">
                <div className = "content">
                    <h2>Contact Us</h2>
                    <p> description will go here</p>
                </div>
                <div className ="container">
                    <div className = "contactInfo">
                    <div className = "box">
                    <div className = "icon">|^^|<i class="fa-solid fa-square-envelope"></i></div>
                    <div className = "text">
                    <h3>Address</h3>
                    <p> UTA Arlington,  Arlington, Texas, 701 S Nedderman Dr 76019</p>
                    </div>
                    </div>
                    <div className = "box">
                    <div className = "icon">#<i class="fa-solid fa-phone"></i></div>
                    <div className = "text">
                    <h3>Phone</h3>
                    <p> 817-272-2011 </p>
                    </div>
                    </div>
                    <div className = "box">
                    <div className = "icon">@<i class="fa-solid fa-map-location-dot"></i></div>
                    <div className = "text">
                    <h3>Email</h3>
                    <p> voyager2021@gmail.com</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className= "contact form">
                    <form onSubmit = {sendEmail}>
                    <div className = "text">
                    <h2> <b>send message </b></h2>
                    </div>
                    <div className="col-8 form-group mx-auto">
                     <input type ="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                     <input type ="email" className="form-control" placeholder="Email address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                     <textarea className ="form-control"  id="" cols= "30" rows= "8" placeholder="Your Message" name="message"></textarea>
                     </div>
                    <div className = "inputbox">
                    <input type ="submit" className="btn-info" value ="send message"></input>
                    
                    
        
                    </div>
                    </form>
                    </div>
            </div>
                
                
            );

}