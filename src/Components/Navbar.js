import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class=" navbar navbar-expand-lg navbar-light lighten-1">
        <Link to="/home" class="navbar-brand font-weight-bold" href="#">
          JONCEIL
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <box-icon
            class="box-icon"
            size="2rem"
            color=" #000000"
            name="menu"
            type="logo"
          ></box-icon>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
          <ul class="navbar-nav mx-auto text-center">
            
            <NavLink
              tag={Link}
              activeClassName="active1"
              to="/about"
              class="nav-item"
            >
              <a class="nav-link" href="#">
              INSPIRATION
              </a>
            </NavLink>
            <NavLink
              tag={Link}
              activeClassName="active1"
              to="/"
              class="nav-item"
            >
              <a class="nav-link" href="#">
              INSTALLATIONS
              </a>
            </NavLink>
            <NavLink
              tag={Link}
              activeClassName="active1"
              to="/contact"
              class="nav-item"
            >
              <a class="nav-link" href="#">
              CONTACT US
              </a>
            </NavLink>
            <NavLink
              tag={Link}
              activeClassName="active1"
              to="/product"
              class="nav-item"
            >
              <a class="nav-link" href="#">
              PRODUCT
              </a>
            </NavLink>
          </ul>


          
    <ul class="navbar-nav ml-auto">
    <li class="nav-item">
        <a class="nav-link ml-3" href="#">
        <box-icon
                    class="box-icon"
                    size="1.5rem"
                    color=" #000000"
                    name="globe"
                    type="logo"
                  ></box-icon>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link ml-3" href="#">
        <box-icon
                    class="box-icon"
                    size="1.5rem"
                    color=" #000000"
                    name="search-alt-2"
                    type="logo"
                  ></box-icon>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link ml-3" href="#">
        <box-icon
                    class="box-icon"
                    size="1.5rem"
                    color=" #000000"
                    name="cart-add"
                    type="solid"
                  ></box-icon>
        </a>
      </li>
      
    </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
