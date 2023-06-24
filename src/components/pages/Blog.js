import React from "react";
import NewsletterSignup from "./Newsleter";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLongArrowAltRight } from "react-icons/fa";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Blog() {
  return (
    <div>
      <div id="page-header" className="blog-header">
        <div className="mask-blog">
          <h2 className="topPadding pt-5 ">Weiterlesen</h2>
          <p>Lesen Sie alle Fallstudien zu unseren Produkten</p>
        </div>
      </div>
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={require("./img/blog/blog2.jpg")} alt="" />
          </div>
          <div className="blog-details">
            <h2>Gesundheit & Wellness Fitness Training</h2>
            <p>
              <span>Leistungsstarke Funktionen für deine Website</span> <br /> →
              Responsives Design <br /> → Datenschutzfreundliche Funktionen{" "}
              <br /> → Lizenzfreie Mediathek <br /> → Starke SEO-Tools <br /> →
              Marketing und Statistiken
            </p>
            <NavLink to="#">Weiterlesen</NavLink>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={require("./img/blog/blog3.jpg")} alt="" />
          </div>
          <div className="blog-details">
            <h2>Die Komplettlösung für deine Onlinepräsenz</h2>
            <p>
              <span>Leistungsstarke Funktionen für deine Website</span> <br /> →
              Responsives Design <br /> → Datenschutzfreundliche Funktionen{" "}
              <br /> → Lizenzfreie Mediathek <br /> → Starke SEO-Tools <br /> →
              Marketing und Statistiken
            </p>
            <NavLink to="#">Weiterlesen</NavLink>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={require("./img/blog/blog1.jpg")} alt="bolg1 img" />
          </div>
          <div className="blog-details">
            <h2>Blog Persönlicher Blog</h2>
            <p>
              <span>Leistungsstarke Funktionen für deine Website</span> <br /> →
              Responsives Design <br /> → Datenschutzfreundliche Funktionen{" "}
              <br /> → Lizenzfreie Mediathek <br /> → Starke SEO-Tools <br /> →
              Marketing und Statistiken
            </p>
            <NavLink to="#">Weiterlesen</NavLink>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src={require("./img/blog/blog4.jpg")} alt="" />
          </div>
          <div className="blog-details">
            <h2>Webinar Landingpage unternehmen Design Kreativdirektor</h2>
            <p>
              <span>Leistungsstarke Funktionen für deine Website</span> <br /> →
              Responsives Design <br /> → Datenschutzfreundliche Funktionen{" "}
              <br /> → Lizenzfreie Mediathek <br /> → Starke SEO-Tools <br /> →
              Marketing und Statistiken
            </p>
            <NavLink to="#">Weiterlesen</NavLink>
          </div>
          <h1>13/01</h1>
        </div>
      </section>
      {/*    End the first Product Section */}
      <section id="pagination" className="section-p1 pt-4">
        <NavLink to="#">1</NavLink>
        <NavLink to="#">2</NavLink>
        <NavLink to="#">
          <FaLongArrowAltRight />
        </NavLink>{" "}
      </section>
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
