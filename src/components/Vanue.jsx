import React from 'react';
import A1 from "../vanueImages/Vanue1.AVIF";
import A2 from "../vanueImages/Vanue2.AVIF";
import A3 from "../vanueImages/Vanue3.JPEG";
import A4 from "../vanueImages/Vanue4.JPEG";
import A5 from "../vanueImages/Vanue5.JPEG";
import A6 from "../vanueImages/parking.PNG";
import "./Vanue.css";

const Vanue = () => {
  return (
    <>

<center>
<div class="card I2" >
  <div class="row">
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title I5">FOR GRAND EVENTS</h5>
        <h1 class="card-text I4"><i class="fa-solid fa-left-long i1"></i>VENUE<i class="fa-solid fa-right-long i1"></i></h1>
        <p class="card-text">
        Welcome to Asian Banquets – the premium event venue in Mumbai. Spanning a breathtaking 45,000 sq.ft area, Asian Banquets is your access to the best, unrivalled grandeur, comfort, and luxury. Weddings, corporate events, conferences, exhibitions, parties, and engagements – Asian Banquets offers you more than a decade’s experience in conceptualizing and organizing events of varied scales.
        </p>
        <span class="I3 lead">For a Stunning Start to New  <br />Beginnings and For Creating <br /> Lasting Impressions</span>
      </div>
    </div>
    <div class="col-md-6">
      <img src={A1} class="img-fluid rounded-start I1 " alt="..."/>
    </div>
  </div>
</div>


<div class="card B" >
  <div class="row ">
  <div class="col-md-6">
      <img src={A2} class="img-fluid rounded-start B1" alt="..."/>
    </div>

    <div class="col-md-6">
      <div class="card-body">
      <h1 class="card-title B2"><i class="fa-solid fa-left-long b1"></i>BANQUET<i class="fa-solid fa-right-long b1"></i></h1>
        <p class="card-text B3">
        Our beautiful 7500 Sqft pillarless indoor banquet is a perfect space to host your guests. It is equipped with professional audio capabilities, sparkling chandeliers and mood controllable lights to create an ideal atmosphere as per your event. The banquet is fully ventilated and air-conditioned to keep <br /> your guests comfortable.
        </p>
      </div>
    </div>
  </div>
</div>



<div class="card B" >
  <div class="row ">
    <div class="col-md-6">
      <div class="card-body">
      <h2 class="card-title C1"><i class="fa-solid fa-left-long b1"></i>OUTDOOR DINING<i class="fa-solid fa-right-long b1"></i></h2>
        <p class="card-text B3">
        Adjoining our spacious banquet is our beautifully landscaped outdoor dining area that spreads across 10,000 sqft. It is a perfect space for outdoor food service as well as large installations for your event. Ornamental plants surrounding the area is a visual and olfactory delight.
        </p>
      </div>
    </div>

    <div class="col-md-6">
      <img src={A3} class="img-fluid rounded-start B1" alt="..."/>
    </div>
  </div>
</div>


<div class="card B" >
  <div class="row ">
  <div class="col-md-6">
      <img src={A4} class="img-fluid rounded-start D1" alt="..."/>
    </div>

    <div class="col-md-6">
      <div class="card-body">
      <h2 class="card-title D2"><i class="fa-solid fa-left-long b1"></i>CHANGING ROOMS<i class="fa-solid fa-right-long b1"></i></h2>
        <p class="card-text B3">
        The venue is equipped with four changing rooms, each with a dedicated shower room for you and your guests to change into the finest attire for your event.
        </p>
      </div>
    </div>
  </div>
</div>


<div class="card B" >
  <div class="row ">
    <div class="col-md-6">
      <div class="card-body">
      <h2 class="card-title C1"><i class="fa-solid fa-left-long b1"></i>GARDENED DRIVEWAY<i class="fa-solid fa-right-long b1"></i></h2>
        <p class="card-text B3">
        Welcome your guest to your extravagant event through our beautiful driveway bordered by a perfectly manicured landscape. Our driveway is a <br />perfect area for your processions.
              </p>
      </div>
    </div>

    <div class="col-md-6">
      <img src={A5} class="img-fluid rounded-start B1" alt="..."/>
    </div>
  </div>
</div>

<div class="card B" >
  <div class="row ">
  <div class="col-md-6">
      <img src={A6} class="img-fluid rounded-start D1" alt="..."/>
    </div>

    <div class="col-md-6">
      <div class="card-body">
      <h2 class="card-title D2"><i class="fa-solid fa-left-long b1"></i>CAR PARKING<i class="fa-solid fa-right-long b1"></i></h2>
        <p class="card-text B3">
        With 200 covered car parking, your guest will be spending more time at your event rather than searching for parking. Our complimentary valet service will take care of your vehicles as soon as you arrive.
        </p>
      </div>
    </div>
  </div>
</div>




<div class="E">
<h3 class="G1">BOOK NOW AND GET BEST SEASON PRICE</h3>
<button class="btn bg-white Z2">Book Now</button>
</div>

</center>


</>
    
  )
}

export default Vanue