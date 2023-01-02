import React from "react";
import "././css/privacypolicy.css";
import "./css/dsa.css";
import "./css/delivery&return.css";
import logo from "./images/logo.png";
import table_one from "./images/table1.png";
import table_two from "./images/table2.png";
import table_three from "./images/table3.png";
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
import curveimage from "./images/curve-img.png";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* <!-- header --> */}
      <header>
        <nav className="navbar navbar-dark bg-transperent">
          <div className="container" />

          <div className="logo">
            <a href="/hifit">
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

      <div className="headerText1">
        <h5 className="text-white mt-5">Contact</h5>

        <p className="headerText2_des">
          <h5 className="text-white mt-4 mb-3 ">Ünvanı</h5>
          Fit Teknoloji Bilişim ve Yazılım Limited Şirketi (HİFİT)
          <br></br>
          <br></br>
          Ticari Sicil Numarası 248082
          <h5 className="text-white mt-4 mb-3 ">Genel Müdürlük</h5>
          Yakuplu Mh.Hürriyet Blv.Skyport Residence No : 1 D: 212 Beylikdüzü/
          İstanbul
          <br></br>
          <br></br>
        
          <h5 className="text-white mt-4 mb-3 ">Operasyon Merkezi</h5>
          Yakuplu Mh.Hürriyet Blv.Skyport Residence No : 1 D: 212 Beylikdüzü/ İstanbul
          <br></br>
          <br></br>

          <h5 className="text-white mt-4">Telefon</h5>
          02128760266 (Çağrı Merkezi)<br></br>
          Çağrı Merkezimiz her gün 09.00 - 17.00 saatleri arasında çalışır.
          <br></br>
          <br></br>

          <h5 className="text-white mt-4 mb-3 ">E-Mail</h5>
          hello@hifit.live
          <br></br>
          <br></br>

        </p>
      </div>

      <div className="downloadContainer">
        <h1 className="download-text">Download Now</h1>
        <div className="emty" />
        <div className="app-btn-bottom">
          <a href="https://www.apple.com/in/app-store/" target="_blank">
            <img src={app_stote} className="img-fluid" />
          </a>

          <a href="https://play.google.com/store/apps" target="_blank">
            <img src={play_store} className="img-fluid" />
          </a>
        </div>

        <h1 className="mail-text">hello@hifit.live</h1>

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
          {/* <div className="curve">
            <img src={curveimage} alt="curve-img" className="curve_img"/>
        </div> */}

          <div className="footer-card">
            <img src={footercard} />
          </div>
        </section>
      </div>

      {/* footer section */}
      <div className="footer-section">
        <div className="row">
          <a
            href="#"
            className="col-2"
            onClick={() => navigate("/DistanceSalesAgreement")}
          >
            <h5 className="footer-text">Distance Sales Agreement</h5>
          </a>

          <a
            href="#"
            className="col-2"
            onClick={() => navigate("/PrivacyPolicy")}
          >
            <h5 className="footer-text">Privacy Policy</h5>
          </a>
          <a
            href="#"
            className="col-2"
            onClick={() => navigate("/Kvkk")}
          >
            <h5 className="footer-text">kvkk</h5>
          </a>

          <a
            href="#"
            className="col-2"
            onClick={() => navigate("/Delivery&Returns")}
          >
            <h5 className="footer-text">Delivery and Returns</h5>
          </a>

          <a href="#" className="col-2" onClick={() => navigate("/Contact")}>
            <h5 className="footer-text">Contact</h5>
          </a>
        </div>
      </div>

      <div className="right-reserved-container">
        <a href="#">
          <h5 className="footer-Bottom-text">
            © 2022 Hifit All rights reserved
          </h5>
        </a>
      </div>

    </div>
  );
};

export default Contact;
