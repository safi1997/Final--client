import React, { useEffect } from "react";
import { useParams } from "react-router-dom";


function ProductDetails() {

  let { productId } = useParams();

  const [product, setProduct] = React.useState({});

  useEffect(() => {
    fetchProductDetails(productId);
  }, [productId]);

  const fetchProductDetails = async (productId) => {
    const response = await fetch(`http://localhost:9000/api/products/${productId}`);
    const data = await response.json();

    setProduct(data);
  };




  return (
    <div>
      <section id="prodetails" className="section-p1">
        <h1>{product.name}</h1>
        <div className="single-pro-image">
          <img
            src="asstes/img/09/REEBOK-K-NIGLICHE-KLASSISCHEN-JOGGER-2-trainer-4.jpg"
            width="100%"
            id="MainImg"
            alt=""
          />

          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src="asstes/img/09/Nike-junge-turnschuhe-modell-Sterne-Runner-3-st-dtischen-sport-grau-farbe-mode-jungen-schuhe-original-3.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src="asstes/img/09/Reebok-modell-B-ist-FZ-HDY-referenz-CF4277-farbe-BRGLAV-Jacke-f-r-junge-rmeln-fertig-1.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src="asstes/img/09/Reebok-modell-G-ist-FZ-HDY-referenz-CF4244-farbe-BRGRIN-Jacke-f-r-m-dchen-Der-1.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                src="asstes/img/09/Reebok-modell-REEBOK-AD-SWIFTWAY-RUN-farbe-BLAU-WEI-Turnschuhe-f-r-frauen-Stoff-kaplan-f-1.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="single-pro-details">
          <h6> Schuhe und Pulover</h6>
          <h4> Meine Fashion Schuhe und Pulover</h4>
          <h2>74CHF</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button className="nurmal"> Add to Cart</button>
          <h2>LifeStyle</h2>
          <span>
            Bekannte Persönlichkeiten erlauben LifeStyle einen Blick hinter die
            Kulissen ihres Alltags und zeigen ihre eigenen vier Wände. Daneben
            bringt das Magazin auch aktuelle Themen-Sendungen und ist bei
            Glamour-Anlässen live vor Ort. Zudem verpasst LifeStyle in
            «NewStyle» seinen Zuschauern einen neuen Style.
          </span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h1>Feature Products</h1>
        <p>Summer and Weather Collection New Morden Design and more </p>
        <div className="pro_container">
          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img
              src="asstes/img/product/REEBOK-K-NIGLICHE-KLASSISCHEN-JOGGER-3-trainer-Navy-FLUOR.jpg"
              alt=""
            />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>120CHF</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>

          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img
              src="asstes/img/09/ROYAL-GLIDE-SYN-sneaker-Wei-GS-1.jpg"
              alt=""
            />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>120CHF</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>

          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img
              src="asstes/img/09/REEBOK-ROYAL-GLIDE-RIP-H-trainer-wei-ROYAL-GLIDE-4.jpg"
              alt=""
            />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>120CHF</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>

          <div
            className="pro"
            onClick={() => (window.location.href = "smal-product.html")}>
            <img
              src="asstes/img/09/M-nner-Rfid-Brieftasche-Metall-Fall-Aluminium-Doppel-Box-Leder-Kreditkarte-Halter-f-r-frauen-D-18.jpg_640x640-18.jpg"
              alt=""
            />
            <div className="des">
              <span>Schuhe</span>
              <h5>frauen Sport Laufschuhe</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>120CHF</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4> Sign Up For Newsletter</h4>
          <p>
            Get E-Mail updates about our latest shop and{" "}
            <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="your email Adresse" />
          <button className="nurmal">Sign Up</button>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
