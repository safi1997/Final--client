import React, { useState } from "react";

function NewsletterSignup() {
  const [email, setEmail] = useState("Safolah.karimi@hicoder.ch");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <section id="newsletter" className="section-p1 section-m1 ">
      <div className="newstext">
        <h4>Sign Up For Newsletter</h4>
        <p>
          Get E-Mail updates about our latest shop and{" "}
          <span>special offers</span>
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="your email Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="normal">
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default NewsletterSignup;
