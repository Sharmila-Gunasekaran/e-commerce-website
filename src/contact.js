import React from "react";
import './styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";
import { faSquareFacebook, faLinkedin, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
function Contact(){
    let contfunc=function(event){
        event.preventDefault();
        let fullname=document.getElementById('fullname').value;
        let mail=document.getElementById('mail').value;
        let number=document.getElementById('number').value;
        let msg=document.getElementById('msg').value;
        if(fullname==''||fullname==null||mail==''||mail==null||number==''||number==null||msg==''||msg==null){
            alert('Please enter a valid input, fill out all the fields!');
            return false;
        }
        else if(isNaN(number) || number.length!=10){
            alert('Please enter a valid contact number');
            return false;
        }
        else{
            alert('Thank you, we will get back to you soon!');
            document.getElementById('fullname').value='';
            document.getElementById('mail').value='';
            document.getElementById('number').value='';
            document.getElementById('msg').value='';
        }
    }
    const openpage = (links) => {
        window.open(links, '_blank', 'height=600px,width=700px');
      };
    return(
        <>
        <div style={{display:'flex', width:'100%', justifyContent:'space-around', alignItems:'center'}}>
        <form style={{width:'50%'}} id='contform'> 
            <input type='text' placeholder="Full Name*" required id='fullname'></input><br/><br/>
            <input type='email' placeholder="Your email ID*" required id='mail'></input><br/><br/>
            <input type='text' maxLength='10' placeholder="Your contact number*" required id='number'></input><br/><br/>
            <textarea rows="6" style={{width:'100%'}} required placeholder="Your message please..." id='msg'></textarea><br/>
            <button type='reset' style={{
                backgroundColor: "rgb(43, 99, 78)",
                color: "white",
                padding: "5px",
                margin: '15px 20px'
              }}>Clear</button>
            <button style={{
                backgroundColor: "rgb(43, 99, 78)",
                color: "white",
                padding: "5px",
                marginTop: '15px'
              }} onClick={contfunc}>Send Message</button>
        </form>
        <aside style={{width:'40%', textShadow:'2px 2px 10px grey', fontStyle:'italic'}}>
        <h2 style={{fontWeight:'900'}}>Let's connect and create something amazing together!</h2>
        <h4 style={{fontWeight:'900'}}>Contact us, we are just a click away!</h4><br/>
        <div style={{display:'flex', width:'100%'}}>
            <div><FontAwesomeIcon icon={faEnvelope} style={{fontSize:'50px'}} />&nbsp;&nbsp;</div>
            <div>
            <h5>Mail us at<br/>
            shoppersdotcom@shoppers.com</h5>
            </div>        
        </div>
        <div style={{fontSize:'35px', color:'grey'}}>
      <FontAwesomeIcon icon={faSquareFacebook} onClick={()=>openpage('https://www.facebook.com')}/>&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faLinkedin} onClick={()=>openpage('https://www.linkedin.com')}/>&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faTwitter} onClick={()=>openpage('https://www.twitter.com')}/>&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faInstagram} onClick={()=>openpage('https://www.instagram.com')}/>&nbsp;&nbsp;&nbsp; 
      <FontAwesomeIcon icon={faYoutube} onClick={()=>openpage('https://www.youtube.com')}/>
      </div>       
        </aside>
        </div>
        </>
    )
}
export default Contact;