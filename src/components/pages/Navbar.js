import { NavLink } from "react-router-dom";
import logowatch from "./img/logo/logowatch.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "react-bootstrap";
import LoginButton from "../login/LoginButton";
import LogoutButton from "../login/LogoutButton";
import {
  faCartPlus,
  faOutdent,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
function MyNavbar() {
  return (
    <div class="container-fluid shadow ">
      <section id="header">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <img className="logoimg" src={logowatch} alt="logowatch" />
        <Navbar.Collapse id="basic-navbar-nav"> </Navbar.Collapse>
        <>
          <ul id="navbar">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li id="lg-bag">
              <NavLink to="/Cart">
                <FontAwesomeIcon icon={faCartPlus} />
              </NavLink>
            </li>
            <NavLink to="#fgf" id="close">
              <FontAwesomeIcon icon={faTimes} />
            </NavLink>
            <li>
              <LoginButton />
              <LogoutButton />
            </li>{" "}
          </ul>
        </>

        {/* <div id="mobile">
          <NavLink to="/Cart">
            <FontAwesomeIcon icon={faCartPlus} />
          </NavLink>
          {<FontAwesomeIcon id="bar" icon={faOutdent} />}
        </div> */}
      </section>
      <marquee bgcolor="#F2F2F2" loop="-1" scrollamount="5" width="100%">
        <b> Responsive Design</b> User registration and login Product search and
        filter Product categories and sub-categories Product detail page with
        images, descriptions, and reviews Shopping cart and checkout Payment
        gateway integration Order tracking and history Customer support and
        feedback Wishlist and saved items Social media sharing and promotion
      </marquee>
    </div>
  );
}

export default MyNavbar;
