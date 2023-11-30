import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styling.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";
import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function Login(){
    const navigate =useNavigate();

    let validatemail = function(mailid){
        let check = /^([a-zA-Z0-9%+_-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(?:(\.[a-zA-Z0-9-_]{2,}))?(?:(\.[a-zA-Z0-9-_]{2,}))?$/;
        return check.test(mailid);
    }

    let validateform=function(){
        let U_name = document.getElementById('username');
        let U_pswd = document.getElementById('userpswd');
        let U_mail = document.getElementById('usermail');
        let cap = document.getElementById('cap');
        let captchainp = document.getElementById('captchainp').value;
        let robot=document.getElementById('robot');
        if(U_name.value.length<2 || U_name.value === null || U_name.value === ''){
            alert("Username should be minimum of 2 characters!");
            return false;
        }
        if(U_mail.value === null || U_mail.value === ''){
            alert('Please enter your Mail ID, it should not be empty!');           
            return false;
        }
        if(validatemail(U_mail.value) === false){
            alert('Please enter a valid Mail ID!');            
            return false;
        }
        if(U_pswd.value.length!==8 || U_pswd.value === null || U_pswd.value === ''){
            alert("Password should exactly be of 8 characters!");            
            return false;
        }
        if(cap.innerHTML != captchainp){
            alert("Invalid captcha");
            return false;
        }
        if(!robot.checked){
            alert("Please verify that you're not a Robot");
            return false;
        }
        else{
            alert('Login Successful!');
            document.getElementById('username').value='';
            document.getElementById('usermail').value='';
            document.getElementById('userpswd').value='';
            navigate('/home');
        }
    }

    let signup = function(){
        navigate('/signup');
    };
    useEffect(()=>{
        let captcha=function(){
            var strings = '';
            const alphanumericChars = '0123456789CEFHIJKMNPRTUVXZ';
            
            for(let i=0; i<6; i++){
                let randomnumber = Math.floor(Math.random()* 26);
                strings = strings + alphanumericChars.charAt(randomnumber);        
            }
            document.getElementById('cap').innerHTML=strings; 
        }
        document.addEventListener('load', captcha());
    },[]);
    let captcha=function(){
        var strings = '';
        const alphanumericChars = '0123456789CEFHIJKMNPRTUVXZ';
        
        for(let i=0; i<6; i++){
            let randomnumber = Math.floor(Math.random()* 26);
            strings = strings + alphanumericChars.charAt(randomnumber);        
        }
        document.getElementById('cap').innerHTML=strings; 
    }

return(
    <>
    <div style={{width:'100%'}}>
    <center>
    <form id='loginform'>
        <h3><input type='text' placeholder='Username' id='username' autoFocus></input></h3>
        <h3><input type='email' placeholder='Email address' id='usermail' ></input></h3>
        <h3><input type='password' placeholder='Password' id='userpswd' maxLength='8' ></input></h3> 
        <h6 style={{fontWeight:600, fontSize:'13px'}}><p>Password should be exactly of 8 characters</p></h6> 
        
        <div style={{display:'flex', justifyContent:'center'}}>
            <div id='cap' style={{fontSize:'25px', fontStyle:'italic', fontWeight:'500'}}></div>&nbsp;&nbsp;
             <FontAwesomeIcon icon={faArrowsRotate}  style={{fontSize:'20px',position:'relative', top:'8px'}} onClick={captcha}/> 
            <input type='text' id='captchainp' placeholder='Please enter the captcha' style={{fontSize:'17px', marginLeft:'2%'}}></input>
        </div>   <br/>
        <input type='checkbox' id='robot' style={{width:'3%'}}></input> I am not a Robot
        <input type='button' value='LOGIN' onClick={validateform} style={{ backgroundColor: 'rgb(43, 99, 78)', color:'white'}}/>
    </form>  
    </center>
    <br/>  
    <center>Not have an account?<span style={{color:'rgb(43, 99, 78)', fontWeight:'1000'}} onClick={signup}> Sign Up here</span> </center>
    </div>
    
    </>
);
}
export default Login;
