import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
function Payment() {
  let [card, setcard] = useState("");
  let [cvvnum, setcvvnum] = useState("");
  let [expiredt, setexpiredt] = useState("");
  let [upi, setupi] = useState("");
  let [deliverydate, setdeliverydate]=useState('');

  const totalamnt = sessionStorage.getItem("Totalamount");
  const Amount = totalamnt ? JSON.parse(totalamnt) : [];
  const totalitems = sessionStorage.getItem("Items");
  const Items = totalitems ? JSON.parse(totalitems) : [];
  const itemcount = Items.length;
  const cart = sessionStorage.getItem("cartcount");
  const quantity = totalamnt ? JSON.parse(cart) : [];
  let totalquantity = quantity.reduce((sum, items) => sum + items, 0);

  const [showUPIInput, setShowUPIInput] = useState(false);

  const handleUPIOption = (event) => {
    setShowUPIInput(event.target.id === "anyupi");
  };
  let navigate = useNavigate();

  let paymentcnfm = (event) => {
    event.preventDefault();
    if (isNaN(card)) {
      alert("Please enter a valid Card number!");
      return false;
    } else if (cvvnum.length !== 3 || isNaN(cvvnum)) {
      alert("Please enter a valid CVV number!");
      return false;
    } else {
      navigate("/exit");
      return true;
    }
  };
  let upiform = (event) => {
    event.preventDefault();
    if (upi.trim() === "") {
      alert("Please enter a valid UPI ID");
      return false;
    } else {
      navigate("/exit");
      return true;
    }
  };
  useEffect(() => {
    var creditCardInput = document.getElementById("cardnum");

    const handleCardNumberInput = function () {
      var cleanedInput = creditCardInput.value.replace(/\D/g, "");
      var formattedInput = cleanedInput.replace(/(\d{4})(?=\d)/g, "$1 ");
      creditCardInput.value = formattedInput;
    };
    creditCardInput.addEventListener("input", handleCardNumberInput);
    return () => {
      creditCardInput.removeEventListener("input", handleCardNumberInput);
    };
  }, []);
  let validatemail = function(mailid){
    let check = /^([a-zA-Z0-9%+_-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(?:(\.[a-zA-Z0-9-_]{2,}))?(?:(\.[a-zA-Z0-9-_]{2,}))?$/;
    return check.test(mailid);
}
  let addressfunc = function (event) {
    event.preventDefault();
    let mail = document.getElementById('mail').value;
    let addr = document.getElementById('addr').value;
    let first = document.getElementById('first').value;
    let last = document.getElementById('last').value;
    let city = document.getElementById('city').value;
    let pincode = document.getElementById('pincode').value;

    if (mail === '' || mail === null || addr === '' || addr === null || first === '' || first === null || last === '' || last === null || city === '' || city === null || pincode === '' || pincode === null) {
      alert('Please enter a valid input, fill all the fields.');
      return false;
    } else if (isNaN(pincode) || pincode.length !== 6) {
      alert('Please enter a valid PIN code');
      return false;
    }
    else if(validatemail(mail) === false){
      alert('Please enter a valid Mail ID!');            
      return false;
  }
    else{
      alert('Thank you, your shipping address confirmed');
    }
  }
  useEffect(()=>{
    let captcha=function(){
            let randomnumber = Math.floor(Math.random()* 31)+1;
            setdeliverydate(randomnumber);       
    }
    document.addEventListener('load', captcha());
},[]);
  return (
    <>
      <div id="paymentmaindiv">
        <form id="paymentform">
          <input
            type="email"
            placeholder="Email"
            style={{ width: "100%" }}
            required
            id='mail'
          ></input>
          <br />
          <div>
            <input type="checkbox" /> Sign up for exclusive offers and news via
            text messages & email.
          </div>
          <h5>Shipping Address</h5>
          <input
            type="text"
            placeholder="First name"
            style={{ width: "48%" }}
            required
            id='first'
          ></input>
          <input
            type="text"
            placeholder="Last name"
            style={{ width: "48%" }}
            required
            id='last'
          ></input>
          <input
            type="textarea"
            placeholder="Address"
            style={{ width: "100%" }}
            required
            id='addr'
          ></input>
          <input
            type="textarea"
            placeholder="Appartment, Suite, etc. (optional)"
            style={{ width: "100%" }}
          ></input>
          <input
            type="text"
            placeholder="City"
            style={{ width: "100%" }}
            required
            id='city'
          ></input>
          <input
            type="type"
            placeholder="Country/Region"
            readOnly
            value="INDIA"
            style={{ width: "32%" }}
            required
          ></input>
          <select
            placeholder="Country/Region"
            style={{ width: "32%", height: "47px" }}
          >
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Karnataka</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Chandigarh</option>
            <option>Rajasthan</option>
            <option>Punjab</option>
            <option>West Bengal</option>
            <option>Haryana</option>
            <option>Uttar Pradesh</option>
            <option>Uttarkhand</option>
            <option>Himachal Pradesh</option>
            <option>Telegana</option>
            <option>Manipur</option>
            <option>Arunachal Pradesh</option>
          </select>
          <input
            type="text"
            placeholder="Postcode"
            style={{ width:"32%"}}
            required
            id='pincode'
          ></input>
          <center>
            <button
              style={{
                backgroundColor: "rgb(43, 99, 78)",
                color: "white",
                padding: "5px",
                marginTop: '15px'
              }}
              onClick={addressfunc}
            >
              CONFIRM ADDRESS
            </button>
          </center>
        </form>
        <div id="pay">
          <h3>
            <center>Payment Options</center>
          </h3>
          <div id="ordersum">
            <center>
              <h6>ORDER SUMMARY</h6>
            </center>
            <h6>
              Total Items({itemcount}) &nbsp; &nbsp;&nbsp;--- &nbsp;&nbsp;
              &nbsp; Total Quantity({totalquantity})
            </h6>
            <h6>{`Expected Date of Delivery: ${deliverydate} December 2023`}</h6>
            <h5>
              Amount Payable: <FontAwesomeIcon icon={faIndianRupeeSign} />
              {Amount}
            </h5>
          </div>
          <div
            class="accordion"
            id="accordionPanelsStayOpenExample"
            style={{ marginBottom: "10%" }}
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button custom-accordion-header"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <strong>UPI</strong>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <h6>Choose an option</h6>
                  <form onSubmit={upiform}>
                    <input
                      type="radio"
                      name="upi"
                      id="phonepe"
                      onChange={handleUPIOption}
                    ></input>{" "}
                    PhonePe
                    <br />
                    <input
                      type="radio"
                      name="upi"
                      id="anyupi"
                      onChange={handleUPIOption}
                    ></input>{" "}
                    Your UPI ID
                    <br />
                    {showUPIInput && (
                      <div>
                        <label htmlFor="upiId">Enter Your UPI ID: </label>
                        <input
                          type="text"
                          id="upiId"
                          onChange={(e) => setupi(e.target.value)}
                          placeholder="Your UPI ID"
                          style={{ width: "45%" }}
                          required
                        ></input>
                        <select style={{ width: "30%", height: "29px" }}>
                          <option>@okaxis</option>
                          <option>@okicici</option>
                          <option>@okhdfcbank</option>
                          <option>@oksbi</option>
                        </select>
                      </div>
                    )}
                    Pay by any UPI App.
                    <center>
                      <button
                        style={{
                          backgroundColor: "rgb(43, 99, 78)",
                          color: "white",
                          padding: "5px",
                        }}
                        type="submit"
                      >
                        CONFIRM
                      </button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
            <div class="accordion-item" style={{ backgroundColor: "white" }}>
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed custom-accordion-header"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <strong>
                    <h6>Credit/Debit/ATM Card</h6>
                    <p>(Add and secure your card as per RBI guidelines.)</p>
                  </strong>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  <form onSubmit={paymentcnfm}>
                    <input
                      type="text"
                      onChange={(e) => setcard(e.target.value)}
                      id="cardnum"
                      placeholder="Card Number"
                      maxLength="19"
                      style={{ width: "100%", padding: "8px" }}
                      required
                    ></input>
                    <br />
                    <br />
                    <input
                      type="month"
                      onChange={(e) => setexpiredt(e.target.value)}
                      id="expire"
                      placeholder="Expiration Date"
                      style={{ width: "60%", padding: "8px" }}
                      required
                    ></input>
                    <input
                      type="text"
                      onChange={(e) => setcvvnum(e.target.value)}
                      id="cvv"
                      placeholder="CVC/CVV"
                      maxLength="3"
                      required
                      style={{ width: "40%", padding: "8px" }}
                    ></input>
                    <br />
                    Expiration Date
                    <center>
                      <button
                        style={{
                          backgroundColor: "rgb(43, 99, 78)",
                          color: "white",
                          padding: "5px",
                        }}
                        type="submit"
                      >
                        CONFIRM
                      </button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Payment;
