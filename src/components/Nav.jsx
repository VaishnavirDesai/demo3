import { Outlet, Link } from "react-router-dom";
import React from "react";
import A from "../navImages/nav5.SVG";
import "./Nav.css";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            <img src={A} alt="Logo" width="200" height="100" className="Image" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/vanue" className="nav-link">
                  Vanue
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a href="tel:7218640378" className="nav-link">
                  <span itemprop="telephone"/>
                  <i className="fa-solid fa-phone"></i>7218640378
                </a>
              </li>
              <li className="nav-item S1">
                <Link to="/enquire">
                  <button className="btn bg-white">ENQUIRE NOW</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
