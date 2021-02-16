import React from "react";
import { FaInstagram, FaFacebook, FaRegEnvelope } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="menu">
      <div className="content">
        <p>Gallery</p>
        <p>Contact</p>
      </div>
      <hr style={{ color: "red", width: "100%", marginTop: "4.5em" }} />
      <section className="socialM">
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
    </div>
  );
};

export default Menu;
