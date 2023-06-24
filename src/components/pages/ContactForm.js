import React, { useState } from "react";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      subject,
      message,
    };

    await fetch("http://localhost:9000/api/v1/customers/contact-form/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Alle diese Fakten zeigen</span>
      <h2>welchen Wettbewerbsvorteil Sie derzeit mit einer</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required></textarea>

      <button className="textarea-button" type="submit">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
