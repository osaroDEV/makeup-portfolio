import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import Loader from "./Loader";
import Menu from "./Menu";
import Reviews from "./Reviews";
import Footer from "./Footer";
import "./App.css";
import "./menu.css";

function TBG() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMain, setIsMain] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const openMenu = () => {
    setOpen(!open);
    setIsMenu(!isMenu);
  };
  setTimeout(() => {
    setIsMain(true);
    setIsLoading(false);
  }, 5000);
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (isMain) {
    return (
      <div>
        <div className="header">
          <section className="flex">
            <div style={{ margin: "auto", textAlign: "center" }}>
              <h3>Teez Beauty Glow</h3>
              <p>You literally glow</p>
            </div>
            <div className="hamburger" onClick={() => openMenu()}>
              {open ? <IoCloseOutline /> : <BiMenuAltRight />}
            </div>
          </section>
        </div>
        {isMenu ? <Menu /> : ""}
        <div className="main">
          <img className="bio-img" src="./images/bio.jpg" alt="Tracy Onaiwu" />
          <section>
            <div className="bio-title center margin">
              <h1>Tracy Onaiwu</h1>
              <div className="underline"></div>
            </div>
          </section>
          <p>
            I have been working as a makeup artist for a four years. I have
            developed a reputation for my outstanding work and commitment to
            client satisfaction.
          </p>
          <br />
          <p>
            I provide everything from makeup services to executive presentation
            makeup for all types of faces, looks and beauty needs.
          </p>
          <br />
          <p>
            It is particularly important to me to offer you holistic and, above
            all, long-term optimizations in terms of beauty.
          </p>
        </div>
        <div className="photos">
          <img className="bio-img" src="./images/model.jpg" alt="model" />
          <img className="bio-img" src="./images/work.jpg" alt="work" />
        </div>
        <Reviews />
        <Footer />
      </div>
    );
  }
}

export default TBG;
