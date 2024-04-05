import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container Z51">
      <h1 className="card-title C1 ml-3 text-center"><i className="fa-solid fa-left-long b1"></i>CONTACT US<i className="fa-solid fa-right-long b1"></i></h1><br />
      <div className="row">
        <div className="col-md-6">
          <div className="row g-3">
            <div className="col">
              <label htmlFor="firstName" className="form-label Z52">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="First name" aria-label="First name" />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label Z52">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Last name" aria-label="Last name" />
            </div>
          </div>
          <br />
          <form className="row g-3">
            <label htmlFor="mobile" className="form-label">Mobile no:</label>
            <input type="number" className="form-control" id="mobile" />

            <label htmlFor="email" className="form-label">Email Id</label>
            <input type="email" className="form-control" id="email" />


            <label htmlFor="address" className="form-label">Address </label>
            <input type="text" className="form-control" id="address" placeholder="Apartment, studio, or floor" />

            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="col-md-2">
              <label htmlFor="zip" className="form-label">Pin code</label>
              <input type="text" className="form-control" id="zip" />
            </div>

            <label htmlFor="occasion" className="form-label">Occasion</label>
            <select id="occasion" className="form-select">
              <option selected>Choose...</option>
              <option>Wedding</option>
              <option>Reception</option>
              <option>Party</option>
              <option>Anniversary</option>
              <option>corportte</option>
              <option>Exhibition</option>
              <option>other</option>
            </select>

            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>

            <div className="col-12">
              <button type="submit" className="btn Z53">Submit</button>
            </div>
          </form>
        </div>

        <div className="col-md-1 "></div>

        <div className="col-md-5 Z54">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8436566203604!2d74.21063110882676!3d16.634613884063548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc055949029e31f%3A0xbe56025d0ff6b18!2stej%20agro%20tourism!5e0!3m2!1sen!2sin!4v1708426639138!5m2!1sen!2sin" style={{ height: '100%', width: 480 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>


      <div class="card C51 border-top border-5">
  <div class="card-body C52">
    <h5 class="card-title C53">Copyright © 2020 Asian Banquets. All rights reserved. | Sitemap</h5>
    <p class="card-text C54">Design and Marketing by GBIM.com</p>
    <i class="fa-brands fa-facebook-f C55"></i>
    <i class="fa-brands fa-instagram C55"></i>
    <i class="fa-solid fa-wifi C55"></i>
  </div>
</div>

    </div>
  );
}

export default Contact;
