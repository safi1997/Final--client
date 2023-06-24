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

import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <div>
      {/*  start the header section */}
      <section id="page-header" className="contact-header shadow-lg">
        <div className="mask-contact">
          <h2 className="topPadding pt-5 ">
            Eigene Website zu haben ist sowie eigner laden.
          </h2>
          <p>
            Wenn Sie ihre Leistungen erhöhen möchten denn sind wir für Sie die
            richtigen. Für einen guten Überblick über das Geschehen, lassen Sie
            uns am besten mit einigen Zahlen und Fakten beginnen:
          </p>
        </div>
      </section>
      {/*  End the header section */}
      {/*  Start the Contat datails section */}
      <section id="contact-details" className="section-p1 mt-5">
        <div className="datails">
          <span>
            Der Onlinehandel betrug jeden Tag allein in weltweit 53,3 Milliarden
            Umsatz.Tendenz steigend.
          </span>
          <h2>
            Der E-Commerce Umsatz wuchs laut dem „Handelsverband schweizerische“
            von 2014 - Heute im Durchschnitt mehr als man glaubt pro Jahr und
            das nur in der schweiz.
          </h2>
          <p>
            Mehr als die Hälfte aller Website-Zugriffe erfolgt mittlerweile via
            Smartphone oder Tablet. Im Jahr 2018 surften 68% der Internetnutzer
            auf mobilen Endgeräten. 22% der Unternehmen hatten im Jahr 2017 noch
            keine Website. Viele Firmen, betreiben eine veraltete oder
            unzureichende Homepage. 80% der Unternehmen aktualisieren ihre
            Websites nicht. Rund 69% der Kaufentscheidungen beginnen mit einer
            Suche im Internet. Die Eigene Website ist bei einem
            durchschnittlichen Unternehmen auf Platz 3 der Neukundengewinnung.
          </p>
          <div>
            <li>
              <i className="fal fa-map"></i>
              <h3>Adrasse:</h3>
              <p>Nussbaumen 5415 Haldenstrasse</p>
            </li>
            <li>
              <i className="fal fa-map"></i>
              <h3>Mail:</h3>
              <p>Safollah.karimi@gmail.com</p>
            </li>
            <li>
              <i className="fal fa-map"></i>
              <h3>öffnungszeiten:</h3>
              <p>Mo bis Fr 08:00 - 17:00</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.ch/maps/d/embed?mid=1A41HzYK8MVYy2E5__mQLbzZD5SdZK0rK"
            width="800"
            height="500"></iframe>
        </div>
      </section>
      {/*  End the Contat datails section */}
      {/*  Start the Contat Form section */}
      <section id="form-details" className="mt-4 shadow-lg">
        <ContactForm />
        <div className="people">
          <div>
            <img
              src={require("./img/contact/james_bond.jpg")}
              alt="James Bond"
            />
            <p>
              <span>James Bond</span> Wir machen den Unterschied! Meine
              Tätigkeit ist nicht nur mein Beruf, sondern auch meine
              Leidenschaft. Mein Ziel ist Ihre Arbeit in Bestenlich zu bringen!
              Ich freue mich auf Ihre Kontaktaufnahme! <br />
              <br /> Tel: 034 345 21 45
              <br /> Mail: James.bond@gmail.com
            </p>
          </div>
          <div>
            <img
              src={require("./img/contact/jason-sttham.jpg")}
              alt="Jason Statham"
            />
            <p>
              <span>Jason Statham</span> Wir machen den Unterschied! Meine
              Tätigkeit ist nicht nur mein Beruf, sondern auch meine
              Leidenschaft. Mein Ziel ist Ihre Arbeit in Bestenlich zu bringen!
              Ich freue mich auf Ihre Kontaktaufnahme! <br />
              <br /> Tel: 034 345 67 84
              <br /> Mail:Jason.sttham@gmail.com
            </p>
          </div>
          <div>
            <img
              src={require("./img/contact/rosie huntington-whiteley.jpg")}
              alt="Rosie Huntington-Whiteley"
            />
            <p>
              <span>Rosie Huntington-Whiteley</span> Wir machen den Unterschied!
              Meine Tätigkeit ist nicht nur mein Beruf, sondern auch meine
              Leidenschaft. Mein Ziel ist Ihre Arbeit in Bestenlich zu bringen!
              Ich freue mich auf Ihre Kontaktaufnahme!
              <br />
              <br /> Tel: 034 345 67 84
              <br /> Mail: Rosie.Huntington-Whiteley@gmail.com
            </p>
          </div>
        </div>
      </section>
      {/*  End the Contat form section */}
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
