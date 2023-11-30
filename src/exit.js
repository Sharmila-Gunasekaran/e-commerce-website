import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";
import {faFaceGrinWide, faFaceSmile,faCartShopping, faFaceFrown} from '@fortawesome/free-solid-svg-icons';
function Exit(){
    let navigate=useNavigate();
    useEffect(()=>{
        let captcha=function(){
            var strings = '';
            const alphanumericChars = '0123456789CEFHIJKMNPRTUVXZ';
            
            for(let i=0; i<10; i++){
                let randomnumber = Math.floor(Math.random()* 26);
                strings = strings + alphanumericChars.charAt(randomnumber);        
            }
            document.getElementById('cap').innerHTML=strings; 
        }
        document.addEventListener('load', captcha());
    },[]);
    let thanku = function(comment){
            let thank = document.getElementById('thank');
            if(comment === 'great'){
                thank.innerHTML=`Fantastic! We're thrilled that you had a great experience.<br/>
                If there's anything specific you loved or any suggestions, please let us know in the comments. `;
                thank.style.color='rgb(130, 210, 130)';
            }
            else if(comment ==='good'){
                thank.innerHTML=`Great to hear that you had a good experience! <br/>
                If there's anything specific you enjoyed or any suggestions, feel free to share in the comments.`;
                thank.style.color='orange';
            }
            else if(comment === 'bad'){
                thank.innerHTML=`We're sorry to hear that you had a less than satisfactory experience.<br/>
                 Please share more details in the comment box so that we can improve.`;
                 thank.style.color='rgb(192, 116, 116)';
            }            
    }
    let exitfunc=function(event){
        event.preventDefault();
        let feed=document.getElementById('feed').value;
        if(feed !='' && feed != null){
            alert('Thank you for your response!');
            document.getElementById('feed').value='';
            navigate('/home');
            return false;
        }    
        else{
            alert('Please give us your feedback');
        }    
    }
    
    return(
        <>
        <center>
        <div >
        <h2 style={{color:'darkgreen'}}>Payment Successful!</h2>
        <h5><FontAwesomeIcon icon={faCartShopping} /> Your Order ID:  <span id='cap'></span></h5>        
        <i>Love your purchase? <br/>Share the joy with friends and family! Tag us on social media using <strong>#shopper's.comJoyfulMoments.</strong></i>
        </div>
        <br/>
        <div id='feedback'>
            <article>
            <h5>Grateful for your visit! <br/>Let us know how we can make your next shopping trip even better. </h5>
            <h5><span style={{color:'darkgreen'}}>Great!</span> &nbsp;&nbsp; <span style={{color:'orange'}}>Good</span> &nbsp;&nbsp; <span style={{color:'red'}}>Bad</span></h5>
                <FontAwesomeIcon icon={faFaceGrinWide} onClick={()=>{thanku('great')}} style={{fontSize:'40px', color:'rgb(130, 190, 130)',cursor:'pointer', display:'inline-block',padding:'14px'}}/>
                <FontAwesomeIcon icon={faFaceSmile} onClick={()=>{thanku('good')}} style={{fontSize:'40px', color:'rgb(228, 183, 101)',cursor:'pointer', display:'inline-block', padding:'14px'}}/>
                <FontAwesomeIcon icon={faFaceFrown} onClick={()=>{thanku('bad')}} style={{fontSize:'40px', color:'rgb(192, 116, 116)',cursor:'pointer', display:'inline-block', padding:'14px'}}/>
                <h6 id='thank'></h6>
            <form>
                <textarea rows='4' id='feed' required placeholder='We value your feedback...' style={{cursor:'text', width:'100%'}}></textarea><br/>
                <button style={{
                          backgroundColor: "rgb(43, 99, 78)",
                          color: "white",
                          fontWeight:'650',
                          padding: "5px 10px",
                          border:'none',
                        }} onClick={exitfunc}>SUBMIT</button>
            </form>
            </article>            
        </div>
        </center>
        </>
    );
}
export default Exit;