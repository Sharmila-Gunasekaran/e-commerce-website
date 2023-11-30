import React, { useState } from 'react';
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './styling.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome';
function Products() {
  let [cart, changecart] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  let [mycart, changemycart] = useState([]);
  let navigate = useNavigate();

  var cartnumshow = [];
  var storedCartCount = sessionStorage.getItem(`cartcount`);
  if (storedCartCount) {
    cartnumshow = JSON.parse(storedCartCount);
  }
  let cartValue = cartnumshow.reduce(((value, sum) => value + sum), 0);

  let obj1 = [
    { price: 1660, initialprice: 1780, reviews: 4008, EDD: '27 Dec', DC: 80, id: 1, name: 'Comfy-bean Bag', image: 'bean.png'},
    { price: 4040, initialprice: 4850, reviews: 980, EDD: '01 Dec', DC: 55, id: 2, name: 'Outdoor furniture', image: 'furniture.png'},
    { price: 940, initialprice: 1850, reviews: 201, EDD: '29 Nov', DC: 0, id: 3, name: 'Simway Sneakers', image: 'sneakers.png'},
    { price: 1750, initialprice: 1900, reviews: 287, EDD: '26 Nov', DC: 50, id: 4, name: 'Analog alarm clock', image: 'alarmm.png'},
    { price: 3255, initialprice: 3500, reviews: 4008, EDD: '04 Dec', DC: 30, id: 5, name: 'Mixer', image: 'mixee.png'},
    { price: 4540, initialprice: 5550, reviews: 2980, EDD: '02 Dec', DC: 110, id: 6, name: 'Cabin (M)', image: 'luggage.png'},
    { price: 15040, initialprice: 17800, reviews: 201, EDD: '30 Nov', DC: 90, id: 7, name: 'Dishwasher', image: 'dishwasher.png'},
    { price: 35000, initialprice: 40600, reviews: 14987, EDD: '30 Nov', DC: 0, id: 8, name: 'Washing Machine', image: 'washingmac.png'},
    { price: 1660, initialprice: 1949, reviews: 1898, EDD: '14 Dec', DC: 65, id: 9, name: 'Bluetooth Speaker', image: 'speakers.png'},
    { price: 3150, initialprice: 3850, reviews: 4987, EDD: '12 Dec', DC: 0, id: 10, name: 'Wet Grinder', image: 'grinder.png'}
  ];

  const add = function (param) {
    changecart(() => {
      let newcart = [...cart];
      newcart[param] = newcart[param] + 1;
      obj1[param].NOI = newcart[param];
      let updatedmycart = [...mycart];
      changemycart(() => {
        updatedmycart.push(obj1[param]);
        return updatedmycart;
      }
      );
      sessionStorage.setItem('cartcount', JSON.stringify(newcart));
      return newcart;
    });
  };

  const Sub = function (param) {
    changecart(() => {
      let newcart = [...cart];
      if (newcart[param] > 0) {
        newcart[param] = newcart[param] - 1;
      }
      sessionStorage.setItem('cartcount', JSON.stringify(newcart));
      return newcart;
    });
    let updatedmycart = [...mycart];
    let removalitem = updatedmycart.find((item) => item.id === obj1[param].id);
    let index = updatedmycart.indexOf(removalitem);
    if (index !== -1) {
      updatedmycart.splice(index, 1);
    }
    changemycart(updatedmycart);
  };

  var displayitems = true;
  let showcart = function () {
    var arrayin = [];
    var displaycart = document.getElementById('displaycart');
    var existingButton = document.getElementById('viewcartbtn');
    if (existingButton) {
      displaycart.removeChild(existingButton);
    }
    if (displayitems === true) {
      $(displaycart).show('fast');

      let itemCounts = {};
      mycart.forEach((item) => {
        if (itemCounts[item.id]) {
          itemCounts[item.id]++;
        } else {
          itemCounts[item.id] = 1;
        }
      });

      Object.keys(itemCounts).forEach((itemId) => {
        const count = itemCounts[itemId];
        const item = mycart.find((item) => item.id === parseInt(itemId, 10));

        let objectcart = {
          Itemname: item.name,
          Itemid: item.id,
          DC:item.DC,
          Itemcount: count,
          Price: item.price,
          Totalprice: item.price * count,
        };
        arrayin.push(objectcart);
      });

      sessionStorage.setItem('Items', JSON.stringify(arrayin));
      let storedItems = sessionStorage.getItem('Items');
      let arraycarts = storedItems ? JSON.parse(storedItems) : [];
            
      let viewcart = document.createElement('button');
      viewcart.innerHTML = 'View';
      displaycart.appendChild(viewcart);
      if (arraycarts.length > 0) {
        viewcart.addEventListener('click', () => navigate('/cart'));
      }
      displayitems = false;
    }
    else {
      $(displaycart).hide('slow');
      displayitems = true;
    }
  };

  var transferfunc = function (indexvalue) {
    var asidediv = document.getElementById('productaside');
    asidediv.style.boxShadow = '3px 4px 5px grey';
    var transobj = obj1[indexvalue];
    asidediv.innerHTML = '';

    let itemname = document.createElement('h3');
    itemname.innerHTML = `${(transobj.name)}`;
    asidediv.appendChild(itemname);

    let price = document.createElement('h5');
    price.innerHTML = `Price: ${(transobj.price)}`;
    asidediv.appendChild(price);

    let initialprice = document.createElement('h6');
    initialprice.style.textDecorationLine = 'line-through';
    initialprice.style.textDecorationColor = 'maroon';
    initialprice.style.textDecorationThickness = '2px';
    initialprice.innerHTML = `Initial Price: ${(transobj.initialprice)}`;
    asidediv.appendChild(initialprice);

    let delivery = document.createElement('h5');
    delivery.innerHTML = `Expected Date of Delivery: ${(transobj.EDD)}`;
    asidediv.appendChild(delivery);

    let deliverycharge = document.createElement('h5');
    deliverycharge.innerHTML = `Delivery Charge: Rs. ${(transobj.DC)}/-`;
    asidediv.appendChild(deliverycharge);

    let color = document.createElement('h5');
    let colorhead=document.createElement('h5');
    colorhead.innerHTML='Available colors:';
    let select = document.createElement('select');
    let option1 = document.createElement('option');
    option1.text='Red';
    let option2 = document.createElement('option');
    option2.text='Black';
    let option3 = document.createElement('option');
    option3.text='White';
    let option4 = document.createElement('option');
    option4.text='Grey';
    let option5 = document.createElement('option');
    option5.text='Blue';
    let option6 = document.createElement('option');
    option6.text='Teak';
    let option7 = document.createElement('option');
    option7.text='Pink';
    select.add(option1);
    select.add(option2);
    select.add(option3);
    select.add(option4);
    select.add(option5);
    select.add(option6); 
    select.add(option7);  
    color.appendChild(colorhead);
    color.appendChild(select);    
    asidediv.appendChild(color);
  }

  let searchfunc = function () {
    let searcheditem = document.getElementById('productsearch').value;
    let matching = obj1.find((obj) => {
      let objname = obj.name;
      if (objname === searcheditem) {
        return true;
      }
    });
    if (matching) {
      return obj1.indexOf(matching) + 1;
    }
    else {
      alert('no records found!');
      return null;
    }
  }
  let scrollToProduct = function (event) {
    event.preventDefault();
    let productId = searchfunc();
    if (productId !== null) {
      document.getElementById(`productdiv${productId}`).scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }

  return (
    <>
      <center style={{ backgroundColor: 'whitesmoke', position: 'sticky', top: '55px' }}>
        <input type='text' id='productsearch' style={{ borderRadius: '35px' }}></input>
        <button id='signups' onClick={scrollToProduct}>Search</button>
      </center>

      <div id='productoverall'>
        <aside id='productaside'><h6></h6></aside>

        <div id='productmain'>
          {obj1.map((obj, index) => (
            <div id={`productdiv${obj.id}`}>
              <img src={require(`./img/${obj.image}`)} alt='item1' onClick={() => transferfunc(index)} style={{ cursor: 'pointer' }}></img>
              <h4>{`${obj.name}`}</h4>

              <h5>Price: <FontAwesomeIcon icon={faIndianRupeeSign} />{`${obj.price}`}</h5>
              <h5><del style={{ fontSize: '17px' }}>Price: <FontAwesomeIcon icon={faIndianRupeeSign} />{`${obj.initialprice}`}</del></h5>
              <h5>{`Reviews: (${obj.reviews})`}</h5>

              <section class='buttondiv'>
                <button id='addtocart' onClick={() => add(index)}>Add to cart</button>
                <button id='addtocart'>{cartnumshow[index]}</button>
                <button class='subbutton' onClick={() => Sub(index)}>-</button>
              </section>
            </div>
          ))}
        </div>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" id='carticon' style={{ color: 'black', fontSize: '35px', cursor: 'pointer' }} onClick={showcart} />
          <aside id='scartvalue'>{cartValue}</aside>
          <div id='displaycart'>
          </div>
        </div>

      </div>
    </>
  );
}
export default Products;