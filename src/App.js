import React from 'react';
import './styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome.js';
import { faPiedPiper } from '@fortawesome/free-brands-svg-icons';
import { faUser, faHouse, faCartShopping, faPhone } from '@fortawesome/free-solid-svg-icons';
import Home from './home.js';
import Login from './login.js';
import Products from './products.js';
import Contact from './contact.js';
import Signup from './signup.js';
import Cart from './cart.js';
import Payment from './payment.js';
import Exit from './exit.js';
import {Link, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Alisamp(){
    return(
        <div className='container-fluid'>
        <nav id='navi'>
            <div><h2 style={{color:'rgb(255, 123, 0)'}}> <FontAwesomeIcon icon={faPiedPiper} style={{color:'rgb(255, 123, 0)'}}/>Shopper's.com</h2></div>
            <div>
            <span><FontAwesomeIcon icon={faHouse}/> <Link to='home' style={{textDecorationLine:'none', color:'black'}}>Home</Link></span>
            <span><FontAwesomeIcon icon={faCartShopping}/><Link to='products' style={{textDecorationLine:'none', color:'black'}}> Shop</Link></span>
            <span><FontAwesomeIcon icon={faPhone}/><Link to='contact' style={{textDecorationLine:'none', color:'black'}}> Contact</Link></span>
            <span><FontAwesomeIcon icon={faUser}/><Link to='/' style={{textDecorationLine:'none', color:'black'}}> Login</Link></span>
            <button id='signup'><Link to='signup' style={{textDecorationLine:'none', color:'white'}}>SignUp</Link></button>
            </div>
        </nav>
          
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='products' element={<Products/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
            <Route path='payment' element={<Payment/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
            <Route path='/' element={<Login/>}></Route>
            <Route path='signup' element={<Signup/>}></Route>
            <Route path='exit' element={<Exit/>}></Route>
        </Routes>
        </div>
    )
}
export default Alisamp;