import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './style.css'

function Navigation() {
    
        return (
            <nav classname="menu" class="navbar navbar-expand-lg  text-uppercase fixed-top bg-dark" id="mainNav">
           
            <div class="container">
                <a class="navbar-brand" href="/">FPT CINEMA</a>
                <button class="navbar-toggler text-uppercase font-weight-bold text-white rounded bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    MENU
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto ">
                    <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Home</Link></li>
                    <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">MOVIES</Link></li>
                    <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/about">ABOUT</Link></li>
                    <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/news">NEWS</Link></li>
                        <li class="nav-item mx-0 mx-lg-1"><Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/contact">CONTACT</Link></li>
                       
        
                        
                    </ul>
                </div>
            </div>
        </nav>
      
        );
    }


export default Navigation;
