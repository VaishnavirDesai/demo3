import React, { useEffect, useState } from 'react';
import A1 from "../homeImages/Image1.WEBP";
import A2 from "../homeImages/Image2.JPEG";
import A3 from "../homeImages/Image3.JPEG";
import G1 from "../homeImages/Image4.JPEG";
import G2 from "../homeImages/Image4.JPEG";
import G3 from "../homeImages/Image4.JPEG";
import "./Home.css";

const Home = () => {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [calc, setCalc] = useState(0);
  const [no, setNo] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count < 50) {
        setCount((count) => count + 1);
      }
    }, 1000);
  
  }, [count]);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      if (number < 7500) {
        setNumber((number) => number + 1);
      }
    }, 1);
   
  }, [number]);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      if (calc < 1000) {
        setCalc((calc) => calc + 1);
      }
    }, 100);
  }, [calc]);

  useEffect(() => {
    const timer4 = setTimeout(() => {
      if (no < 45000) {
        setNo((no) => no + 1);
      }
    }, 0);
  }, [no]);


  return (
   <>

<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={A1} class="d-block w-100 H1" alt="..."/>
      <div class="carousel-caption d-none d-md-block ">
      <h5 class="card-title  A3"> WELCOME to   </h5>
    <p class="card-text A4"> Tej-agro-tourism   </p>
    <p class="card-text A5"><small> The most premium venue in kolhapur city  </small></p>
    <button class="btn bg-white bg-sm">Read More</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={A2} class="d-block w-100 H1" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5 class="card-title  A3"> WELCOME to   </h5>
    <p class="card-text A4"> Tej-agro-tourism   </p>
    <p class="card-text A5"><small> The most premium venue in kolhapur city  </small></p>
    <button class="btn bg-white bg-sm">Read More</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={A3} class="d-block w-100 H1" alt="..."/>
      <div class="carousel-caption  d-md-block">
      <h5 class="card-title  A3"> WELCOME to   </h5>
    <p class="card-text A4"> Tej-agro-tourism   </p>
    <p class="card-text A5"><small> The most premium venue in kolhapur city  </small></p>
    <button class="btn bg-white bg-sm">Read More</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<div className="container A6">
<div className="row">
  <div className="col-md-3">
        <h1>{count}+</h1>
        <span  class="A7">Years in Industry</span>
  </div>

  <div className="col-md-3">
       <h1>{number} Sqft</h1>
          <span  class="A7">Ballroom</span>
  </div>

  <div className="col-md-3">
        <h1>{calc}+</h1>
        <span class="A7">Event Celebrated</span>
  </div>

  <div className="col-md-3">
        <h1>{no} Sqft</h1>
        <span  class="A7">Venue Area</span>
  </div>
</div>
</div>

<center >
  <div className="c11">
<div class='container '>

<p class="C17">WHAT OUR VISITORS SAY</p>
<h1 class="C18"><i class="fa-solid fa-left-long i1"></i>TESTIMONIALS<i class="fa-solid fa-right-long i1"></i></h1>

<div class="row row-cols-1 row-cols-md-3 g-4 C12">
  <div class="col">
    <div class="card h-100 c13 square">
    <img src={G1} class="card-img-top G11" alt="..."/>
      <div class="card-body">
      <p class="card-text C14">Banquet hall with decorated roof ceiling and light arrangement, huge parking space and hall that can accomodate good amount kf people. Best place to book for events link marriage, reception, etc.</p>
        <small class="text-body-secondary C15">Chitra Parameswaran</small>
        <br />
        <i class="fa-solid fa-star C16"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 c13 square">
    <img src={G2} class="card-img-top G11" alt="..."/>
      <div class="card-body">
      <p class="card-text C14">Excellent atmosphere. Nice food. Nice hospitality. Space available for vehicle parking.</p>
        <small class="text-body-secondary C15">Prashant Kadbettu</small>
        <br />
        <i class="fa-solid fa-star C16"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 c13 square">
    <img src={G3} class="card-img-top G11" alt="..."/>
      <div class="card-body">
      <p class="card-text C14">The Banquet is just superb. Had been here for many wedding occasions. Interiors are awesome and the setup of the wedding and dining area is just perfect. Wedding area is fully AC and the dining area is in the open.</p>
        <small class="text-body-secondary C15">Mayuresh Mokal</small>
        <br />
        <i class="fa-solid fa-star C16"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</center>


<div class="card C51 border-top border-5">
  <div class="card-body C52">
    <h5 class="card-title C53">Copyright © 2020 Asian Banquets. All rights reserved. | Sitemap</h5>
    <p class="card-text C54">Design and Marketing by GBIM.com</p>
    <i class="fa-brands fa-facebook-f C55"></i>
    <i class="fa-brands fa-instagram C55"></i>
    <i class="fa-solid fa-wifi C55"></i>
  </div>
</div>





   </>
  )
}

export default Home


