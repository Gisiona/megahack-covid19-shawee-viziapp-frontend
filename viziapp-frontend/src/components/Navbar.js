/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning fixed-top">
        
        <div className="container">
          
          <a className="navbar-brand" href="#">
            <b>VIZIAPP</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <b>Home</b>
                  <span className="sr-only">(current)</span>
                </a>
              </li>              
              <li className="nav-item">
                <a className="nav-link" href="#como-funciona">
                  <b>Como funciona</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#como-funciona-vizers">
                  <b>Vizers</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faca-seu-cadastro">
                <b>Cadastre-se</b>
                </a>
              </li>
            
             
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
