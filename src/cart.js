import React, { useState, useEffect } from 'react';
import './styling.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  const [initialcartcount, setcartcount] = useState([]);
  const [initialarraycarts, setArrayCarts] = useState([]);
  let navigate = useNavigate();

  var totalamnt = initialarraycarts.reduce((sum, arraytotal) => sum + arraytotal.Totalprice, 0);
  sessionStorage.setItem('Totalamount', JSON.stringify(totalamnt));

  useEffect(() => {
    const cartcount = sessionStorage.getItem('cartcount');
    const arraycartcount = cartcount ? JSON.parse(cartcount) : [];
    setcartcount(arraycartcount);
  }, []);

  const arraycarts = JSON.parse(sessionStorage.getItem('Items'));
  useEffect(() => {
    const updatedArrayCarts = arraycarts.map((cartItem, index) => {
      const Index = cartItem.Itemid - 1;
      const itemCount = initialcartcount[Index];
        return {
          ...cartItem,
          Itemcount: itemCount,
          Totalprice: (itemCount * cartItem.Price)+cartItem.DC,
        };
    });
    const filteredArrayCarts = updatedArrayCarts.filter(
      (cartItem) => cartItem.Itemcount !== 0);
    if (JSON.stringify(filteredArrayCarts) !== JSON.stringify(arraycarts)) {
      setArrayCarts(filteredArrayCarts);
      sessionStorage.setItem('Items', JSON.stringify(filteredArrayCarts));
    }
  }, [initialcartcount, arraycarts]);

  const add = function (param) {
    setcartcount(() => {
      let newcart = [...initialcartcount];
      newcart[param] = newcart[param] + 1;
      sessionStorage.setItem('cartcount', JSON.stringify(newcart));
      return newcart;
    });
  };

  const sub = function (param) {
    setcartcount(() => {
      let newcart = [...initialcartcount];
      if (newcart[param] > 0) {
        newcart[param] = newcart[param] - 1;
      }
      sessionStorage.setItem('cartcount', JSON.stringify(newcart));
      return newcart;
    });
  };

  const tableCellStyle = {
    padding: '10px',
  };

  return (
    <>
      <div id='cartmaindiv'>
        <div style={{ width: '70%' }} >
          <table id='cartdiv' style={{ width: '100%' }} cellPadding='10'>
            <thead>
              <tr>
                <th style={tableCellStyle}>Item</th>
                <th style={tableCellStyle}>Quantity</th>
                <th style={tableCellStyle}>Price</th>
                <th style={tableCellStyle}>Delivery Charge</th>
                <th style={tableCellStyle}>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {arraycarts.map((cartItem, index) => (
                <tr key={index}>
                  <td style={tableCellStyle}>{cartItem.Itemname}</td>
                  <td style={tableCellStyle}>
                    <button onClick={() => add(cartItem.Itemid - 1)}>+</button>
                    <button>{initialcartcount[cartItem.Itemid - 1]} </button>
                    <button onClick={() => sub(cartItem.Itemid - 1)}>-</button>
                  </td>
                  <td style={tableCellStyle}><FontAwesomeIcon icon={faIndianRupeeSign} />{cartItem.Price}</td>
                  <td style={tableCellStyle}><FontAwesomeIcon icon={faIndianRupeeSign} />{cartItem.DC}</td>
                  <td style={tableCellStyle}><FontAwesomeIcon icon={faIndianRupeeSign} />{cartItem.Totalprice}</td>
                </tr>
              ))}
            </tbody>
            <h5 style={{ color: 'Grey', fontWeight: '650', padding: '10px', marginRight:'40px' }}>Amount Payable: <FontAwesomeIcon icon={faIndianRupeeSign} />{totalamnt}</h5>
          </table>
           <div style={{display:'flex', width:'100%', justifyContent:'flex-end'}}>              
              <button id='payment' onClick={() => navigate('/products')}>Add more</button>
              <button id='payment' onClick={() => navigate('/payment')}>Proceed to payment</button>
           </div>
          
          
        </div>
      </div>
    </>
  );
}

export default Cart;
