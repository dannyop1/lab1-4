import React, { useState } from 'react';
import './style.css'
function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);
    const toggleValue = () => setValue(!value);
    return [value, toggleValue];
  }
function Footer() {
    return (
        
        <footer class="footer text-center bg-dark">
            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                           FPT HO CHI MINH CAMPUS
                            <br />
                            VIET NAM
                        </p>
                    </div>
                    
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">OUR SOCIAL MEDIA</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">ABOUT US</h4>
                        <p class="lead mb-0">
                            DUONG DONG DUONG - SE161070
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    
    );
}

export default Footer;
