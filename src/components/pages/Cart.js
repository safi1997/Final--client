import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <section id="page-header" className="cart-header">
        <div className="mask-cart">
          <h2>Eigene Website zu haben ist sowie eigner laden.</h2>
          <p>
            wenn Sie ihre Leistungen erhöhen möchten denn sind wir für Sie die
            richtigen. Für einen guten Überblick über das Geschehen, lassen Sie
            uns am besten mit einigen Zahlen und Fakten beginnen:
          </p>
        </div>
      </section>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </NavLink>
              </td>
              <td>
                <img
                  src={require("./img/08/women-pleat-skirt5.jpg")}
                  alt="women-pleat-skirt1"
                />
              </td>
              <td>
                Bekannte Persönlichkeiten erlauben LifeStyle einen Blick hinter
              </td>
              <td>74CHF</td>
              <td>
                <input type="number" defaultValue="1" />
              </td>
              <td>74CHF</td>
            </tr>
            <tr>
              <td>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </NavLink>
              </td>
              <td>
                <img src={require("./img/08/women-pleat-skirt4.jpg")} alt="" />
              </td>
              <td>
                Bekannte Persönlichkeiten erlauben LifeStyle einen Blick hinter
              </td>
              <td>74CHF</td>
              <td>
                <input type="number" defaultValue="1" />
              </td>
              <td>74CHF</td>
            </tr>
            <tr>
              <td>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </NavLink>
              </td>
              <td>
                <img src={require("./img/08/women-pleat-skirt1.jpg")} alt="" />
              </td>
              <td>
                Bekannte Persönlichkeiten erlauben LifeStyle einen Blick hinter
              </td>
              <td>74CHF</td>
              <td>
                <input type="number" defaultValue="1" />
              </td>
              <td>74CHF</td>
            </tr>
            <tr>
              <td>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </NavLink>
              </td>
              <td>
                <img src={require("./img/08/women-pleat-skirt2.jpg")} alt="" />
              </td>
              <td>
                Bekannte Persönlichkeiten erlauben LifeStyle einen Blick hinter
              </td>
              <td>74CHF</td>
              <td>
                <input type="number" defaultValue="1" />
              </td>
              <td>74CHF</td>
            </tr>
            <tr>
              <td>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faTimesCircle} />
                </NavLink>
              </td>
              <td>
                <img src={require("./img/08/women-pleat-skirt3.jpg")} alt="" />
              </td>
              <td>
                Bekannte Persönlichkeiten erlauben LifeStyle einen Blick hinter
              </td>
              <td>74CHF</td>
              <td>
                <input type="number" defaultValue="1" />
              </td>
              <td>74CHF</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="cart-add" className="section-p1">
        <div id="coupen">
          <h3>Apply coupon</h3>
          <div>
            <input type="text" placeholder="Enter your Coupon" />
            <button className="cart-button">Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <table>
            <h3>Cart Totals</h3>
            <tr>
              <td>Cart Subtotal</td>
              <td>335CHF</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>335CHF</strong>
              </td>
            </tr>
          </table>
          <button className="nurmal">Proceed to Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
