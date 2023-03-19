import React from 'react'
import './style.css'
import { Container } from 'react-materialize'

export default function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src="https://batterseapowerstation.co.uk/content/uploads/2022/08/Cinema-in-the-Power-Station-image001hero-1600x869.jpg" alt="Cinema" />
      </div>
      <div className="about-text">
        <h1>About Us</h1>
        <p>Welcome to our cinema! We are dedicated to providing the best movie-going experience possible. Our theaters feature state-of-the-art technology, comfortable seating, and a wide variety of concessions to choose from.</p>
        <p>We offer a diverse selection of movies, from the latest blockbusters to independent and foreign films. Our theaters also host special events such as Q&A sessions with filmmakers and themed movie nights.</p>
        <p>Our goal is to make every visit to our cinema a memorable one. We strive to create a welcoming and inclusive environment for all movie-goers. Thank you for choosing our cinema!</p>
        <p>We look forward to seeing you soon.</p>
        <p>If you have any questions or feedback, please don't hesitate to contact us.</p>
        <p>Follow us on social media for the latest updates and promotions!</p>
     </div>
    </div>
  )
}
