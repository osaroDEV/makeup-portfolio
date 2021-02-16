import React from "react";
import { FaInstagram, FaFacebook, FaRegEnvelope } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <h3 className="logo" style={{ marginBottom: "1em" }}>
        Teez Beauty Glow
      </h3>
      <p style={{ marginBottom: "1em" }}>Copyright &copy; 2021 Tracy Onaiwu</p>
      <div>
        <p style={{ marginBottom: "1em" }}>Gallery</p>
        <p style={{ marginBottom: "1em" }}>Contact</p>
      </div>
      <section className="socialC" style={{ marginBottom: "2em" }}>
        <a
          href="https://www.instagram.com/teezbeautyglow/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/Teez-beauty-glow-102467588340012/?tn-str=k*Fhttps://www.facebook.com/Teez-beauty-glow-102467588340012/?tn-str=k*F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a href="mailto:tracyonaiwu@gmail.com">
          <FaRegEnvelope />
        </a>
      </section>
    </section>
  );
};

export default Footer;
