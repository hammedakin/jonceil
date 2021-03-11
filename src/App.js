import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Homepage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";
import ProductPage from "./Pages/ProductPage";
import Product1 from "./Components/ProductPage/AllProducts/Product1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/home" component={HomePage} />

          <Route exact path="/" component={HomePage} />

          <Route exact path="/contact" component={ContactPage} />

          <Route exact path="/product" component={ProductPage} />

          {/* All Products Page */}
          <Route exact path="/product1" component={Product1} />

          {/* All Products Page */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
