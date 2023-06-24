import React from "react";
import NewsletterSignup from "./Newsleter";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products } from "./Products";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item className="carousel-item  mask" interval={1000}>
          <img
            className="d-block w-100 bg"
            src={require("./img/background/background1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption className="text-center">
            <h4> Trade in offer</h4>
            <h3>Super value deals</h3>
            <h1>On all Products</h1>
            <p class="textp mb-4">
              Ich bin noch nicht mit dieser Homepage fertig und bin ich daran am
              Aufbauen dieser Webshop
            </p>
            <button type="button" class="btn btn-light rounded-pill">
              <a href="bas" target="blank">
                Weiterlesen
              </a>
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 bg"
            src={require("./img/background/background2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption className="text-center">
            <h4> Trade in offer</h4>
            <h3>Super value deals</h3>
            <h1>On all Products</h1>
            <p class="textp mb-4">
              Ich bin noch nicht mit dieser Homepage fertig und bin ich daran am
              Aufbauen dieser Webshop
            </p>
            <button type="button" class="btn btn-light rounded-pill">
              <a href="bas" target="blank">
                Weiterlesen
              </a>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bg"
            src={require("./img/background/background3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption className="text-center">
            <h4> Trade in offer</h4>
            <h3>Super value deals</h3>
            <h1>On all Products</h1>
            <p class="textp mb-4">
              Ich bin noch nicht mit dieser Homepage fertig und bin ich daran am
              Aufbauen dieser Webshop
            </p>
            <button type="button" class="btn btn-light rounded-pill">
              <a href="bas" target="blank">
                Weiterlesen
              </a>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bg"
            src={require("./img/background/background4.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption className="text-center">
            <h4> Trade in offer</h4>
            <h3>Super value deals</h3>
            <h1>On all Products</h1>
            <p class="textp mb-4">
              Ich bin noch nicht mit dieser Homepage fertig und bin ich daran am
              Aufbauen dieser Webshop
            </p>
            <button type="button" class="btn btn-light rounded-pill">
              <a href="bas" target="blank">
                Weiterlesen
              </a>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*    end the Carousel */}
      {/*    Start  the feature Section */}
      <section id="feature" className="section-p1Larger shadow">
        <div className="fe-box">
          <img
            src={require("./img/feature/12/feature8.jpg")}
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
            src={require("./img/feature/12/feature3.jpg")}
            alt="Save Money img"
          />
          <h6>Save Money</h6>
        </div>

        <div className="fe-box">
          <img
            src={require("./img/feature/12/feature4.jpg")}
            alt="Promentions img"
          />
          <h6>Promentions</h6>
        </div>

        <div className="fe-box">
          <img src={require("./img/feature/12/feature5.jpg")} alt="" />
          <h6>Hoppy Sell</h6>
        </div>

        <div className="fe-box">
          <img src={require("./img/feature/12/feature6.jpg")} alt="" />
          <h6>F24/7Super</h6>
        </div>
      </section>
      {/*    End  the feature Section */}
      {/*    Start the first Product Section */}
      <section id="product1" className="section-p1 Larger shadow">
        <h1>Feature Products</h1>
        <div className="pro_container">
          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img src={require("./img/10/product16.jpg")} alt="Product1" />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>120CHF</h4>
            </div>
            <NavLink to="#">
              <FontAwesomeIcon className=" cart" icon={faCartPlus} />
              <FontAwesomeIcon className=" cart" icon={faCartPlus} />
            </NavLink>
          </div>

          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img src={require("./img/10/product24.jpg")} alt="Product2" />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>120CHF</h4>
            </div>
            <NavLink to="#">
              <FontAwesomeIcon className=" cart" icon={faCartPlus} />
            </NavLink>
          </div>

          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img src={require("./img/10/product32.jpg")} alt="Product3" />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>120CHF</h4>
            </div>
            <NavLink to="#">
              <FontAwesomeIcon className=" cart" icon={faCartPlus} />
            </NavLink>
          </div>

          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img src={require("./img/10/product37.jpg")} alt="Product4" />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>120CHF</h4>
            </div>
            <NavLink to="#">
              <FontAwesomeIcon className=" cart" icon={faCartPlus} />
            </NavLink>
          </div>

          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img src={require("./img/10/product44.jpg")} alt="Product3" />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>120CHF</h4>
            </div>
            <NavLink to="#">
              <FontAwesomeIcon className=" cart" icon={faCartPlus} />
            </NavLink>
          </div>

          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img src={require("./img/10/product3.jpg")} alt="Product3" />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star ">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>120CHF</h4>
            </div>
            <NavLink to="#">
              <FontAwesomeIcon className=" cart" icon={faCartPlus} />
            </NavLink>
          </div>

          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img src={require("./img/10/product53.jpg")} alt="Product3" />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>120CHF</h4>
            </div>
            <NavLink to="#">
              <FontAwesomeIcon className=" cart" icon={faCartPlus} />
            </NavLink>
          </div>
          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img src={require("./img/10/product5.jpg")} alt="Product3" />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <h4>120CHF</h4>
            </div>
            <NavLink to="#">
              <FontAwesomeIcon className="cart" icon={faCartPlus} />
            </NavLink>
          </div>
        </div>
      </section>
      {/*    End the first Product Section */}
      {/*    Start the Rapair Service Section */}
      <section id="banner" className="section-m1 Larger shadow">
        <h4> Rapair Service</h4>
        <h2>
          Up to <span>70% off</span> All Shoose and pulover's
        </h2>
        <button className="nurmal">Explore More</button>
      </section>
      {/*   End the Rapair Service Section */}
      {/*    Start the Second Product Section */}
      <section id="product1" className="section-p1 Larger shadow">
        <h1>Feature Products</h1>
        <p>
          Ich bin nach nicht fertig und bin ich daran am Aufbauen dieser Webshop
        </p>
        <div className="pro_container">
          {products.map((product) => (
            <div
              key={product.id}
              className="pro"
              onClick={() => (window.location.href = "smal-product.html")}>
              <img src={product.image} alt={product.name} />
              <div className="des">
                <span>Schuhe</span>
                <h5>{product.name}</h5>
                <div className="star">
                  {Array.from(Array(product.rating).keys()).map((i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
                <h4>{product.price}CHF</h4>
              </div>
              <NavLink to="#">
                <FontAwesomeIcon className=" cart" icon={faCartPlus} />
              </NavLink>
            </div>
          ))}
        </div>
      </section>
      {/*    Star the dirty banner Section */}
      <section id="banner3" className="Larger shadow">
        <div className="banner-box">
          <h2> SEASONAL SALe</h2>
          <h3> Winter Collection -50% off </h3>
        </div>
        <div className="banner-box banner-box2">
          <h2> SEASONAL SALe</h2>
          <h3> Winter Collection -50% off </h3>
        </div>
        <div className="banner-box banner-box3">
          <h2> SEASONAL SALe</h2>
          <h3> Winter Collection -50% off </h3>
        </div>
      </section>
      {/*    End  the dirty banner Section */}
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
    </>
  );
}
