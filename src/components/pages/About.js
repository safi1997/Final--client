import React from "react";
import NewsletterSignup from "./Newsleter";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <div>
      {/*  start the header section  */}
      <section id="page-header" className="about-header shadow-l">
        <div className="mask-contact">
          <h2 className="topPadding pt-5 ">
            Eigene Website zu haben ist wie ein eigener Laden.
          </h2>
          <p>
            Wenn Sie Ihre Leistungen erhöhen möchten, sind wir für Sie die
            Richtigen. Für einen guten Überblick über das Geschehen, lassen Sie
            uns am besten mit einigen Zahlen und Fakten beginnen:
          </p>
        </div>
      </section>
      {/*  End the header section  */}
      {/*  start the content section  */}
      <section id="about-head" className="section-p1">
        <img src={require("./img/about/app_img.jpg")} alt="" />
        <div>
          <h3 className="mt-5">Welcome To Our web Agentur</h3>
          <p className="about-text">
            Lösung und fliegen von Webseiten nehme ich sehr gerne, sowie Content
            Management System, oder selbst Programmierte Webseiten oder Online
            Shop. Es soll nicht in erste Schritte sein aber sowie versprochen es
            muss in beste Funktion im Google Firefox und Opera, Chrome, Edge und
            zu weiter funktionieren!!
          </p>
          <abbr title="">Web Design und Programmierung ist mir wichtig</abbr>
          <h5 className="about-text">
            Seit ich mit Programmieren angefangen habe, es macht mir sehr viel
            Spass, habe sehr viel Freude, wenn ich am Computer oder auf eine
            Homepage arbeite es macht mir sehr viel Spass. Ich habe für einige
            Firmen Webseiten erstellt, sind sie früh und haben auch Freude,
            davon Natürlich bin ich auch sehr stolz, dass ich es geschafft habe.
            Ich arbeite momentan bei Ikea Schweiz in Spreitenbach.
          </h5>
        </div>
      </section>
      {/*  End the content section  */}
      {/*  start the feature section  */}
      <section id="about-app" className="section-p1">
        <h2>
          {" "}
          Download our <a href="#">app</a>
        </h2>
        <div className="video">
          {/* <iframe
            width="500px"
            height="700px"
            autoplay
            muted
            loop
            src="https://www.youtube.com/embed/4KLYXunLw84"
          ></iframe> */}
        </div>
      </section>
      <section id="feature" className="section-p1 ">
        <div className="fe-box">
          <img
            src={require("./img/feature/12/feature3.jpg")}
            alt="Free Shipping img"
          />
          <h6>Free Shipping</h6>
        </div>

        <div className="fe-box">
          <img
            src={require("./img/feature/12/feature2.jpg")}
            alt="Online Order img"
          />
          <h6>Online Order</h6>
        </div>

        <div className="fe-box">
          <img
            src={require("./img/feature/12/feature11.jpg")}
            alt="Save Money img"
          />
          <h6>Save Money</h6>
        </div>

        <div className="fe-box">
          <img
            src={require("./img/feature/12/feature9.jpg")}
            alt="Promentions img "
          />
          <h6>Promentions</h6>
        </div>

        <div className="fe-box">
          <img src={require("./img/feature/12/feature7.jpg")} alt="" />
          <h6>Hoppy Sell</h6>
        </div>

        <div className="fe-box">
          <img src={require("./img/feature/12/feature8.jpg")} alt="" />
          <h6>F24/7Super</h6>
        </div>
      </section>
      {/*  End the feature section  */}
      {/*    End  the Newsleter Section */}
      <section id="newsletter" className="section-p1 section-m1  p-5">
        <div className="newstext">
          <h4> Sign Up For Newsletter</h4>
          <p>
            Get E-Mail updates about our latest shop and{" "}
            <span> special offers</span>
          </p>
        </div>
        <div>
          <NewsletterSignup />
        </div>
      </section>
      {/*    Star the Newsleter Section */}
      {/*    Star the Footer Section */}
      <footer className="section-p1">
        <div className="col">
          <img
            className="logo"
            src={require("./img/logo/logowatch.png")}
            alt=""
          />
          <h4>Contact</h4>
          <p>
            <strong> Adresse:</strong> Haldenstrasse Nussbaumen5415
          </p>
          <p>
            <strong>Tel:</strong> (+) 077 927 62 55
          </p>
          <p>
            <strong>Öffnungszeit</strong> Mo - fr 07:00 - 20:00
          </p>

          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faPinterestP} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About us</h4>
          <NavLink to="#">About us</NavLink>
          <NavLink to="#">Delivery Information</NavLink>
          <NavLink to="#">Privacy Policy</NavLink>
          <NavLink to="#">Terms & Condetions</NavLink>
          <NavLink to="#">Contact us</NavLink>
        </div>
        <div className="col">
          <h4>My Acount</h4>
          <NavLink to="#">Sign in</NavLink>
          <NavLink to="#">View Cart</NavLink>
          <NavLink to="#">My Wishlist</NavLink>
          <NavLink to="#">Track My Order</NavLink>
          <NavLink to="#">Help</NavLink>
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>Fromm Appstore or from Google Play</p>
          <div className="row">
            <img
              src="https://thumbs.dreamstime.com/b/basic-rgb-179717724.jpg"
              alt="Google Play store img"
            />
          </div>
          {/* <p> Secured Payment Gateways</p>
          <img src="asstes/img/feature/12/Payment_icon.jpg" alt="" /> */}
        </div>

        {/* <div className="col copy ">
          <form action="index.php">
            <p>©2022, HTML CSS JAVASCRIPT</p>
          </form>
        </div> */}
      </footer>
      {/*    End the Footer Section */}
    </div>
  );
}
