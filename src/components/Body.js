import React from "react";
import "./css/style.css";
import logo from "./images/logo.png";
import app_stote from "./images/app_stote.png";
import play_store from "./images/google_play.png";
import hand from "./images/hand.png";
import aboutus from "./images/about-us.png";
import leftImg from "./images/leftimg.png";
import rightimg from "./images/right-img.png";
import one from "./images/one.png";
import two from "./images/two.png";
import three from "./images/three.png";
import exercise from "./images/exercise.png";
import dumble from "./images/dumble.png";
import dumble_des from "./images/hamer-discrip.png";
import comeon from "./images/comeon.png";
import runner from "./images/runner.png";
import weight from "./images/weight.png";
import instagram from "./images/instagram.png";
import linkdin from "./images/linkdin.png";
import twitter from "./images/twitter.png";
import ticktok from "./images/ticktok.png";
import footercard from "./images/footer-card.png";

function Body() {
  return (
    <div className="main_container">
      <div className="container">
        {/* <!-- header --> */}
        <header>
          <nav className="navbar navbar-dark bg-transperent">
            <div className="container" />

            <div className="logo">
              <a href="index.html">
                <img src={logo} />
              </a>
            </div>
            <div>
              <a href="">
                <span className="language-muted">TR</span>
                <span className="language-text"> / EN</span>
              </a>
            </div>
          </nav>
        </header>
      </div>

      {/* <!-- end header --> */}
      {/* <!-- banner --> */}
      <section className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="row">
              <div className="col-md-6">
                <h2 className="banner-title">
                  Without leaving your home do sport!
                </h2>
                <p className="banner-para">
                  Take care of your health whenever you wish exercise with HiFit
                  wherever you want!
                </p>
                <div className="app-btn">
                  <a href="https://www.apple.com/in/app-store/" target="_blank">
                    <img src={app_stote} className="img-fluid" />
                  </a>
                  <a href="https://play.google.com/store/apps" target="_blank">
                    <img src={play_store} className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <h1 className="banner-bg">Hello</h1>
        <img src={hand} className="banner-back" />
      </div>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={aboutus} className="aboutus" />
            </div>
            <div className="col-md-6">
              <h3 className="about-title text-white">
                Technology meets health.
              </h3>
              <p className="about-content text-white">
                Take care of your health whenever you wish exercise with HiFit
                wherever Take care of your health whenever you wish exercise
                with HiFit wherever
              </p>
              <p className="about-content text-white">
                Take care of your health whenever you wish exercise with HiFit
                wherever Take care of your health whenever you wish exercise
                with HiFit wherever
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mid-container">
        <div className="col-md-10">
          <h1 className="mid-text-bold">Suitable for you find the trainer</h1>
        </div>

        <div className="col-md-8">
          <h3 className="mid-text-medium">
            Respond to body goals and specific needs Reach instructors
          </h3>
        </div>

        <div className="mid-logo">
          <img src={logo} alt="logo-mid" className="mid-logo-img" />
        </div>
      </section>

      <div className="container-fluid">
        <img src={leftImg} className="mid-left-img" />
        <img src={rightimg} className="mid-right-img" />
      </div>

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-4">
            <img src={one} className="mobile-img" />
          </div>

          <div className="col-4">
            <img src={two} className="mobile-img" />
          </div>

          <div className="col-4">
            <img src={three} className="mobile-img" />
          </div>
        </div>
      </div>

      <section className="mid-text-container">
        <div className="col-md-10">
          <h2 className="text-bold">Whenever you wish, wherever you want</h2>
        </div>

        <div className="col-md-6">
          <h3 className="text-medium">
            Book lessons in advance or Call whenever you want from where you
            are!
          </h3>
        </div>
      </section>

      <div className="exercise-container">
        <img src={exercise} className="exercise-img" />
      </div>

      <section className="container-fluid">
        <img src={dumble} className="mid-left-img" />
        <img src={dumble_des} className="dumble_des" />
      </section>

      <section className="runner">
        <img src={comeon} className="come-on" />
        <img src={runner} className="runner-img" />
        <img src={weight} className="weight-img" />

        <img src={logo} alt="logo-mid" className="bottom-logo-img" />
      </section>

      <div className="download-container">
        <h3 className="download-text">Download Now</h3>
        <div className="emty" />
        <div className="app-btn-bottom">
          <a href="https://www.apple.com/in/app-store/" target="_blank">
            <img src={app_stote} className="img-fluid" />
          </a>

          <a href="https://play.google.com/store/apps" target="_blank">
            <img src={play_store} className="img-fluid" />
          </a>
        </div>

        <h3 className="mail-text">hello@hifit.live</h3>

        <section className="social-icons-container">
          <div className="row ">
            <div className="col-2">
              <a
                href="https://www.instagram.com/pixelvaluestechnolabs/?hl=en"
                target="_blank"
              >
                <img src={instagram} className="socila-icons-img" />
              </a>
            </div>

            <div className="col-2">
              <a href="https://twitter.com/valueslabs?lang=en" target="_blank">
                <img src={twitter} className="socila-icons-img" />
              </a>
            </div>

            <div className="col-2">
              <a
                href="https://www.instagram.com/pixelvaluestechnolabs/?hl=en"
                target="_blank"
              >
                <img src={linkdin} className="socila-icons-img" />
              </a>
            </div>

            <div className="col-2">
              <a
                href="https://www.instagram.com/pixelvaluestechnolabs/?hl=en"
                target="_blank"
              >
                <img src={ticktok} className="socila-icons-img" />
              </a>
            </div>
          </div>

          <div className="footer-card">
            <img src={footercard} />
          </div>
        </section>
      </div>

      {/* footer section */}
      <div className="footer-section">
        <div className="row">
          <div className="col-3">
            <h5 className="footer-text">Distance Sales Agreement</h5>
          </div>

          <div className="col-3">
            <h5 className="footer-text">Privacy Policy</h5>
          </div>

          <div className="col-3">
            <h5 className="footer-text">Delivery and Returns</h5>
          </div>

          <div className="col-3">
            <h5 className="footer-text">Contact</h5>
          </div>
        </div>

      </div>
    
      <div className="right-reserved-container">
          <a href="#">
            <h5 className="footer-bottom-text">© 2022 Hifit All rights reserved</h5>
          </a>
        </div> 

    </div>
  );
}

export default Body;
