import React from 'react';


const Navbar = () => {
    return ( 
        <>

<nav class="navbar navbar-expand-lg navbar-light ">

  <a class="navbar-brand" href="#">JONCEIL</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="basicExampleNav">

    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">INSPIRATION
         
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">INSTALLATIONS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT US</a>
      </li>

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
}
 
export default Navbar;