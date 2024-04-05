import React from "react";
import "./Button.css"; // Import the CSS file

const Button = () => {
  return (
    <div className="container V1">
      <h1 className="V2">Book Now</h1>

      <form action="" >
        <label htmlFor="firstName" className="form-label V3 Z52">
          Full Name
        </label>
        <input
          type="text"
          className="form-control V4"
          id="firstName"
          placeholder="Full name"
          aria-label="First name"
        />

        <label htmlFor="email" className="form-label V3">
          Email Id
        </label>
        <input type="email" className="form-control V4" id="email" />

        <label htmlFor="mobile" className="form-label V3">
          Mobile no:
        </label>
        <input type="number" className="form-control V4" id="mobile" />

        <label htmlFor="occasion" className="form-label V3">
          Occasion
        </label>
        <select id="occasion" className="form-select V5">
          <option selected>Choose...</option>
          <option>Wedding</option>
          <option>Reception</option>
          <option>Party</option>
          <option>Anniversary</option>
          <option>corportte</option>
          <option>Exhibition</option>
          <option>other</option>
        </select>

        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control V4"
            placeholder="Select date"
          />
        </div>

        <label htmlFor="message" className="form-label V3">
          Any Message
        </label>
        <textarea className="form-control V7" id="message" rows="3"></textarea>

<center>
        <button type="submit" class="btn  V6">
          Submit
        </button></center>
      </form>
    </div>
  );
};

export default Button;
