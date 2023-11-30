import React from "react";
import './styling.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome';
import { faSquareFacebook, faLinkedin, faTwitter, faInstagram, faYoutube, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faBars, faMagnifyingGlass, faBoxesStacked, faSquareCheck, faShirt, faCouch, faBoxesPacking, faScrewdriverWrench, 
  faFolder, faCashRegister, faPlay, faBox, faArrowsRotate, faHeadphones, faHouse, faGem,faShoePrints, faPaintbrush, faCartFlatbedSuitcase, 
  faDumbbell, faGlobe, faDolly, faUsers} from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from 'react-router-dom';

function Home(){
    let searchfunc= function(){
        let searchbox = document.getElementById('search');
        searchbox.value = '';
    }
   
    let category = function() {
      let categoriesElement = document.getElementById('categories');
      let dispprop = categoriesElement.style.display;
  
      if (dispprop === 'none' || dispprop === '') {
          categoriesElement.style.display = 'block';
      } else {
          categoriesElement.style.display = 'none';
      }
  }
  

    var paracontent1 = 'Search and filter from millions of products and supplier offerings to find the matching ones for your business';
    var paracontent2 = 'Evaluate product quality and supplier capabilities easily and efficiently through verified inspections and digital sourcing tools.';
    var paracontent3 = 'Pay for your order in over 20 currencies via 20+ secure payment methods, including flexible payment terms.';
    var paracontent4 = "Get your logistics needs fulfilled with real-time tracking for 26,000+ routes across 220 countries and regions powered by Shopper's.com Logistics.";
    var paracontent5 = "Check order status, manage suppliers, track payments and shipments, and contact after-sales support all via Shopper's.com.";
    
    let flowchart = function(flowicons, paracontent, paraid, headid){
      let icons = document.getElementById(flowicons);
      let heading = document.getElementById(headid);
      let para = document.getElementById(paraid);
      heading.appendChild(para);
      para.style.fontSize='18px';
      para.style.color='black';
      para.innerHTML=paracontent;
      icons.style.cssText='background-color:rgb(255, 123, 0); color:whitesmoke; border:none; width:75px; height:75px';
    }
    let flowchart2 = function(flowicons, paraid){
      let icons = document.getElementById(flowicons);
      let para = document.getElementById(paraid);      
      para.innerHTML='';
      icons.style.cssText='background-color:transparent; border:2px solid black; width:75px; height:75px';
    }
    const openpage = (links) => {
      window.open(links, '_blank', 'height=600px,width=700px');
    };

    return(
        <div>
        <div id='homemain'>
        <nav id='navi2'>
            <div id='navi2left'>
              <div onClick={category} style={{paddingRight:'5%', cursor:'pointer'}}><FontAwesomeIcon icon={faBars}/> All Categories</div>
              <div>Trade Assurance</div>
            </div>
            <div id='navi2right'>           
            <div>Buyer Central</div>
            <div>Get the App</div>
            <div><FontAwesomeIcon icon={faDolly} style={{textDecorationLine:'none', color:'white'}}/> Ship to: IN</div>
            <div><FontAwesomeIcon icon={faGlobe} style={{textDecorationLine:'none', color:'white'}}/> English-USD</div>
            </div>
          </nav> 
          
          <div id='categories'>
              <ul>
                <div>
                <li>Home Decor</li>
                <li>Home Appliances</li>
                <li>Industrial</li>
                <li>Health and Personal care</li>
                <li>Fashion and Beauty</li>
                <li>Sports and Entertainment</li>
                <li>Apparel and Accessories</li>
                <li>School and Office supplies</li>
                <li>Furniture</li>
                </div>
                <div>
                <li>Electrical appliances and Supplies</li>
                <li>Packaging and Printing</li>
                <li>Tools and Hardware</li>
                <li>Medical devices and supplies</li>
                <li>Personal care & Household cleaning</li>
                <li>Luggage, Bags and Cases</li>
                <li>Jewellery</li>
                <li>Health care</li>
                <li>Electronic gadgets</li>
                </div>
                <div>
                <li>Lights and Lighting</li>                
                <li>Mother, kids and toys</li>
                <li>Home & Garden</li>
                <li>Gifts & crafts</li>
                <li>Fabric and Textile raw material</li>
                <li>Pet supplies</li>
                <li>Vehicle parts and Accessories</li>
                <li>Hardware and Tools</li>
                </div>
              </ul>
          </div>

          {/* <Routes>
            <Route path='products' element={<Products/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
          </Routes> */}
         
          <article>
            <h1>The leading B2B e-commerce<br/>platform for global trade</h1>
            <br/> 

            <div style={{display:'flex'}}>
            <input type='search' id='search' placeholder="Washing machine"></input>
            <button id='signup' style={{padding:'0 30px 0 30px'}} onClick={searchfunc}><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</button>
            </div>   
            <br/>

            <div id='frequentsearch'>
                <h5>Frequently searched: </h5>
                <div>Soft Toys</div>
                <div>Refridgerator</div>
                <div>Dish Washer</div>
            </div>            
          </article>
          </div>

          {/* section2 */}
          <div id='sec2brown'>
            <div>
                <center><h1><FontAwesomeIcon icon={faBoxesStacked} /></h1></center>
                <h3>Millions of Business Offerings</h3>
                <br/>
                <h5>Explore products and suppliers for your business from millions of offerings worldwide.</h5>
            </div>
            <div>
            <center><h1><FontAwesomeIcon icon={faSquareCheck} /></h1></center>
            <h3>Assured quality and transactions</h3>
            <br/>
            <h5>Ensure production quality from verified suppliers, with your orders protected from payment to delivery.</h5>
            </div>
            <div>
                 <center><h1><FontAwesomeIcon icon={faBox} /></h1></center>
                <h3>One stop trading solution</h3>
                <br/>
                <h5>Order seamlessly from product/supplier search to order management, payment and fulfillment</h5>
            </div>
            <div>
                 <center><h1><FontAwesomeIcon icon={faFolder} /></h1></center>
                <h3>Personalised trading experience</h3>
                <br/>
                <h5>Get curated benefits, such as discounted samples and dedicated support, tailored to your business growth stage.</h5>
            </div>
          </div>

          {/* section3 */}
          <div id='sec3main'>
          <div id='sec3left'>
             <h1>Explore millions of offerings tailored to your business needs.</h1>
          </div>
          <div id='sec3right'>
            <div><h1 style={{color:'rgb(255, 123, 0)'}}>200M+</h1><h5>products</h5></div>
            <div><h1 style={{color:'rgb(255, 123, 0)'}}>200K+</h1><h5>suppliers</h5></div>
            <div><h1 style={{color:'rgb(255, 123, 0)'}}>5,900</h1><h5>product Categories</h5></div>
            <div><h1 style={{color:'rgb(255, 123, 0)'}}>200+</h1><h5>countries and regions</h5></div>
          </div>
          </div>

          {/* section4 */}
          <div id='sec4main'>            
            <div><center><h6><FontAwesomeIcon icon={faHeadphones} style={{fontSize:'30px'}} /><br/>Consumer Electronics</h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faHouse} style={{fontSize:'30px'}}/><br/>Home & Garden </h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faScrewdriverWrench} style={{fontSize:'30px'}}/><br/>Tools & Hardware</h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faBoxesPacking} style={{fontSize:'30px'}}/><br/>Packaging & Printing</h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faGem} style={{fontSize:'30px'}}/><br/>Jewellery & Eyewear</h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faCashRegister} style={{fontSize:'30px'}}/><br/>Vehicle parts & Accessories</h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faCartFlatbedSuitcase} style={{fontSize:'30px'}}/><br/>Luggage, Bags & Cases</h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faDumbbell} style={{fontSize:'30px'}}/><br/>Sports & Entertainment</h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faPaintbrush} style={{fontSize:'30px'}}/><br/>Beauty </h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faShoePrints} style={{fontSize:'30px'}}/><br/>Shoes & Accessories</h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faCouch} style={{fontSize:'30px'}}/><br/>Furniture</h6></center></div>
            <div><center><h6><FontAwesomeIcon icon={faShirt} style={{fontSize:'30px'}}/><br/> Apparel & Accessories</h6></center></div>        
          </div>

          {/* section5 */}
          <div style={{backgroundColor: 'rgb(243, 237, 224)', margin:'10% 0 10% 0', paddingTop:'25px'}}>
          <h1 style={{padding:'40px'}}>Discover your new business opportunity</h1>
          <div id='sec5main'>      
            <div id='sec5first'>
               <h3>Top Ranking</h3>
              <div class='child1'>
              <img src={require('./img/mixerr.jpg')} alt='pic1'/>
              <h5 style={{textAlign:'center'}}>Most popular</h5></div>
              <div style={{display:'flex', width:'400px', justifyContent:'center'}} id='child23'>
              <div><img src={require('./img/mixer.jpg')} alt='pic2'/></div>
              <div><img src={require('./img/bag.jpg')} alt='pic3'/></div>
              </div>
            </div>

            <div>
              <br></br>
              <center><h3>New Arrivals</h3></center>
              <h5 style={{textAlign:'center'}}>68,900+ products added today</h5>
              <div style={{display:'flex', width:'400px', justifyContent:'center', flexWrap:'wrap'}} id='col2img'>

                <div style={{display:'flex', width:'400px', justifyContent:'center'}}>
                <div class='child4'>
                  <img src={require('./img/wrist.jpg')} alt='pic4'/></div>
                <div class='child5'><img src={require('./img/perfume.jpg')} alt='pic5'/></div>
                </div>
                <div style={{display:'flex', width:'400px', justifyContent:'center'}}>
                <div class='child6'><img src={require('./img/bottles.jpg')} alt='pic6'/></div>
                <div class='child7'><img src={require('./img/brushcombo.jpg')} alt='pic7'/></div>
                </div>
                <div><img src={require('./img/clock.jpg')} alt='pic8' height='200px' style={{width:'400px'}}/></div>

              </div>
            </div>

            <div id='sec5third'>
                <center><h3>Savings Spotlight</h3></center>
                <div><img src={require('./img/shoeset.jpg')} alt='pic8' height='200px' style={{width:'400px'}}/></div>
                <div><h5 style={{textAlign:'center'}}>Deals on best sellers</h5><img src={require('./img/sidetable.jpg')} alt='pic8' height='400px' style={{width:'400px'}}/></div>
            </div>    
            </div>        
          </div>

          {/* section6 */}
          <h1 style={{paddingLeft:'60px', fontSize:'50px'}}>Source direct-from-factory</h1>
          <div id='source'>
            <div><img src={require('./img/factorytours.jpg')} alt='pic8'/></div>
            <div><img src={require('./img/topmanuf.jpg')} alt='pic8'/></div>
            <div><img src={require('./img/getsamples.jpg')} alt='pic8'/></div>
          </div>

          {/* section7 */}
          <div id='sec7'>
              <h1 style={{fontWeight:'700', fontSize:'55px', padding:'30px 150px 50px 30px'}}>Trade with confidence from production quality to purchase production</h1>
              <div id='sec7indivs'>
                <div>
                  <h4>Ensure production quality with</h4>
                  <h1>Verified Supplier</h1>
                  <h5>Connect with a variety of suppliers, including Custom Manufacturers, Brand Holders and Multispeciality suppliers
                    that have verified credentials and capabilities.
                  </h5>
                  <br/>
                  <button onClick={()=>openpage('https://www.youtube.com')}><FontAwesomeIcon icon={faPlay}/>  Watch the video</button>
                </div>
                <div>
                <h4>Protect your purchases with</h4>
                  <h1>Trade Assurance</h1>
                  <h5>Source confidently for your business knowing that orders made through Trade Assurance on Shopper's.com are 
                    protected, from payment to delivery and after-sales.
                  </h5>
                  <br/>
                  <button onClick={()=>openpage('https://www.youtube.com')}><FontAwesomeIcon icon={faPlay}/>  Watch the video</button>
                </div>
              </div>
          </div>
          {/* section8 */}

          <h1 id='sec8h1'>Streamline ordering from search to fulfillment, all in one place</h1>
          <div style={{display:'flex', justifyContent:'space-around',
           width:'100%'}}>
          
          <div id='flowchart'>
            <div>
              <div id='flowicons1' style={{height:'75px', width:'75px'}}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div><h4 id='head1' onMouseOver={()=>flowchart('flowicons1', paracontent1, 'para1', 'head1')} onMouseOut={()=>flowchart2('flowicons1', 'para1')}>Search for Matches</h4></div>
              <p id='para1'></p>
            </div>
            <div>
              <div id='flowicons2' style={{height:'75px', width:'75px'}}>
              <FontAwesomeIcon icon={faSquareCheck} />
              </div>
              <div><h4 id='head2' onMouseOver={()=>flowchart('flowicons2', paracontent2, 'para2', 'head2')} onMouseOut={()=>flowchart2('flowicons2', 'para2')}>Identify the Right one</h4></div>
              <p id='para2'></p>
            </div>
            <div>
              <div id='flowicons3' style={{height:'75px', width:'75px'}}>
              <FontAwesomeIcon icon={faArrowsRotate} />
              </div>
              <div><h4 id='head3' onMouseOver={()=>flowchart('flowicons3', paracontent3, 'para3', 'head3')} onMouseOut={()=>flowchart2('flowicons3', 'para3')}>Pay with Confidence</h4></div>
              <p id='para3'></p>
            </div>
            <div>
              <div id='flowicons4' style={{height:'75px', width:'75px'}}>
              <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div><h4 id='head4' onMouseOver={()=>flowchart('flowicons4', paracontent4, 'para4', 'head4')} onMouseOut={()=>flowchart2('flowicons4', 'para4')}>Fulfill with Transparency</h4></div>
              <p id='para4'></p>
            </div>
            <div>
              <div id='flowicons5' style={{height:'75px', width:'75px'}}>
              <FontAwesomeIcon icon={faUsers}/>
              </div>
              <div><h4 id='head5' onMouseOver={()=>flowchart('flowicons5', paracontent5, 'para5', 'head5')} onMouseOut={()=>flowchart2('flowicons5', 'para5')}>Manage with Ease</h4></div>
              <p id='para5'></p>
            </div>
          </div>

          <div id='flowchartimg'>
            <div id='flowchartpic'>
            </div>
          </div>          
          </div>

        {/* section9 */}
          <div id='sec9'>
            <center><h1 style={{color:'rgb(80, 45, 17)', fontSize:'60px'}}>Personalize your trading experience with curated benefits</h1>
            <h5 style={{color:'grey', marginTop:'10px'}}>Grow and succeed with curated benefits offered by Shopper's.com, whether you are a startup business needing the essentials to start
              sourcing or a well-established, enterprise looking for tools and services for more complex orders.
            </h5>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
            <div class="carousel-item active">
            <div id='sec9indiv'>
              <div id='first1'></div>
              <div id='second'><h4 style={{color:'rgb(80, 45, 17)'}}>Eva Jane</h4>
              <h6 style={{color:'grey'}}>Founder of Eva Jane Beauty</h6></div>
              <div id='third'>
                <h3><blockquote>"As an enterpreneur who is deeply involved in the Beauty industry, I have
                  been very devoted to creating my original products. Shopper's.com has been my trusted partner
                  in this process."</blockquote></h3>
              </div>
            </div>
    </div>
    <div class="carousel-item">
            <div id='sec9indiv'>
              <div id='first2'></div>
              <div id='second'><h4 style={{color:'rgb(80, 45, 17)'}}>Ron Williams & Tonjs Williams</h4>
              <h6 style={{color:'grey'}}>Founder & CEO (respectively) of Ron Williams Fitness</h6></div>
              <div id='third'>
                <h3><blockquote>"Shopper's.com is a game changer for small businesses like us. We were able to find the
                  exact product we needed and I don't think we could have sourced anything without Shopper's.com."</blockquote></h3>
              </div>
            </div>
    </div>
    <div class="carousel-item">
            <div id='sec9indiv'>
              <div id='first3'></div>
              <div id='second'><h4 style={{color:'rgb(80, 45, 17)'}}>Dr. Sayed Ibrihim</h4>
              <h6 style={{color:'grey'}}>Founder of Sprin Jene</h6></div>
              <div id='third'>
                <h3><blockquote>"Once I discovered Shopper's.com, I was amazed at how many options I had with 
                  suppliers from all over the world."</blockquote></h3>
              </div>
            </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</center>
</div>
 {/* section10 */}
      <div id='readytost'>
      <h1 style={{fontSize: '65px'}}>Ready to get started?</h1>
      <h4>Explore millions of products from trusted suppliers by signing up today!</h4>
      <Link to='/signup'><button id='signups'>SignUp</button>
      </Link>
      </div>

      {/* section11 */}
      <div id='sec11'>
        <center>
        <h1 style={{color:'rgb(80, 45, 17)', fontSize:'60px'}}>Empowering businesses through global trade</h1>
        <h5 style={{color:'grey', marginTop:'10px'}}>Shopper's.com offers one-stop B2B trading solutions for global small and
        medium-sized businesses, empowering them to transform through digital trade, grasp opportunities, and accelerate
        growth internationally.
        </h5>
        </center>

      <div id='sec11box'>
        <div id='sec11first'>
            <h4 style={{color:'orange'}}>OUR MISSION</h4>
            <h1>Make it easy to do business anywhere.</h1>        
        </div>

        <div id='sec11second'>
          <div id='right1'>
              <div style={{maxWidth:'70%'}}>
                  <h4 style={{color:'orange'}}>OUR LOCATION</h4>
                  <h1>We have teams around the world.</h1>
              </div>
              <div style={{width:'30%', paddingBottom:'20px'}}>
              Hangzhou, China
              Paris, France
              Munich, Germany
              Tokyo, Japan
              Seoul, Korea
              London, UK
              New York, US
              ...
              and many other locations worldwide.
              </div>
          </div>

          <div id='right2'>
            <h4 style={{color:'orange'}}>OUR ESG PROMISES</h4>
            <h1>Responsible technology.</h1>
            <h1>Sustainable future.</h1>
          </div>
        </div>

      </div>
      </div>
      {/* sec12countries */}
      <h1 style={{paddingLeft:'6%'}}>Find suppliers by country or region</h1>
      <center>
      <div id='countries'>
        <div>
        <div><img src={require('./img/indianflag.jpg')} height='40px' width='45px' alt=''/></div>
        <div>India</div> </div>
        <div>
        <div><img src={require('./img/malaysia.jpg')} height='40px' width='45px' alt=''/></div>
        <div>Malaysia</div></div>
        <div>
        <div><img src={require('./img/russia.png')} height='40px' width='45px' alt=''/></div>
        <div>Russia</div></div>
        <div>
        <div><img src={require('./img/japan.png')} height='40px' width='45px' alt=''/></div>
        <div>Japan</div></div>
        <div>
        <div><img src={require('./img/turkeyflag.png')} height='40px' width='45px' alt=''/></div>
        <div>Turkey</div></div>
        <div>
        <div><img src={require('./img/vietnam.png')} height='40px' width='45px' alt=''/></div>
        <div>Vietnam</div></div>
        <div>
        <div><img src={require('./img/italy.jpg')} height='40px' width='45px' alt=''/></div>
        <div>Italy</div></div>
        <div>
        <div><img src={require('./img/usa.png')} height='40px' width='45px' alt=''/></div>
        <div>USA</div></div>
        <div>
        <div><img src={require('./img/thailand.jpg')} height='40px' width='45px' alt=''/></div>
        <div>Thailand</div></div>
      </div>
      </center>
      <hr></hr>
      {/* footer */}
      <footer>
        <div>
        <h4>Get support</h4>
        <h6>Help Center</h6>
        <h6>Live chat</h6>
        <h6>Check order status</h6>
        <h6>Refunds</h6>
        <h6>Report abuse</h6>
        </div>
        <div>
        <h4>Trade Assurance</h4>
        <h6>Safe and easy payments</h6>
        <h6>Money-back policy</h6>
        <h6>On-time shipping</h6>
        <h6>After-sales protections</h6>
        <h6>Product monitoring services</h6>
        </div>
        <div>
        <h4>Source on Shopper's.com</h4>
        <h6>Request for quotation</h6>
        <h6>Membership program</h6>
        <h6>Shopper's.com Logistics</h6>
        <h6>Sales tax and VAT</h6>
        <h6>Shopper's.com Reads </h6>
        </div>
        <div>
        <h4>Sell on Shopper's.com</h4>
        <h6>Start selling</h6>
        <h6>Seller central </h6>
        <h6>Become a verified supplier</h6>
        <h6>Partnerships</h6>
        <h6>Download the App for suppliers </h6>
        </div>
        <div>
        <h4>Get to know us</h4>
        <h6>Shopper's.com</h6>
        <h6>Corporate responsibility </h6>
        <h6>News center</h6>
        <h6>Careers</h6>
        </div>
      </footer>

      {/* iconssection */}
      <div id='footerlast'>
      <div id='footericons'>
      <FontAwesomeIcon icon={faSquareFacebook} onClick={()=>openpage('https://www.facebook.com')}/>
      <FontAwesomeIcon icon={faLinkedin} onClick={()=>openpage('https://www.linkedin.com')}/>
      <FontAwesomeIcon icon={faTwitter} onClick={()=>openpage('https://www.twitter.com')}/>
      <FontAwesomeIcon icon={faInstagram} onClick={()=>openpage('https://www.instagram.com')}/>
      <FontAwesomeIcon icon={faYoutube} onClick={()=>openpage('https://www.youtube.com')}/>
      </div>
      <h5 style={{color:'grey'}}>Trade on the go with the <span style={{color:'black', fontWeight:'500'}}>Shopper's.com app</span></h5>
      <div id='apple' onClick={()=>openpage('https://www.apple.com/')}>
      <FontAwesomeIcon icon={faApple} style={{fontSize:'30px'}}/>
      <span style={{lineHeight:'-1.2', fontSize:'11px'}}> Download on the <span style={{fontSize:'17px'}}>App Store</span></span>
      </div>
      <div id='apple' onClick={()=>openpage('https://play.google.com/store/games?device=windows')}>
      <FontAwesomeIcon icon={faGooglePlay} style={{fontSize:'27px'}}/>
      <span style={{lineHeight:'-1.2', fontSize:'11px'}}> Get in on <span style={{fontSize:'17px'}}>Google Play</span></span>
      </div>   
      </div>

      {/* copyright */}
      <div id='copyright'>
        <h6>Policies and Rules . Legal Notice .  Product Listing Policy . Intellectual Property Protection . 
          Privacy Policy . Terms of Use . Integrity Compliance
        </h6>
        <h6>2001-2023 Shopper's.com. All rights reserved.</h6>
      </div>
        </div>
    );
}
export default Home;