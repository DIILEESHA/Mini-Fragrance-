import React, { useState } from "react";
import "./footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const notify = () =>
    toast.success("Great! You're all set! Cheers!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const onTestClick = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      <h1>email cannot be empty</h1>;
      toast.error("Email address cannot be empty", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    notify();
  };
  return (
    <div className="footer_container">
      <div className="footer_grid">
        <div className="footer_sub">
          <p className="footer_p">
            Scents from Grasse, France.
            <br />
            Developed and designed in @Dileesha.
          </p>
        </div>
        <div className="footer_sub">
          <ul className="footer_img_ul">
            <li className="suca">
              <img
                src="https://nullpunkt.co/cdn/shop/files/221110_NP_Icons_natural_white.png?v=1669546215"
                alt=""
              />
            </li>
            <li className="suca">
              <img
                src="https://nullpunkt.co/cdn/shop/files/221110_NP_Icons_natural_white.png?v=1669546215"
                alt=""
              />
            </li>
            <li className="suca">
              <img
                src="https://nullpunkt.co/cdn/shop/files/221110_NP_Icons_natural_white.png?v=1669546215"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="footer_sub">
          <div className="footer_title">CERTIFIED BY</div>

          <ul className="footer_another_ul">
            <li className="another_li">
              <img
                src="https://nullpunkt.co/cdn/shop/files/vegan-society-logo_f0de9783-e176-44fb-9dec-3c14aab012ec.png?v=1692874517&width=1500"
                alt=""
              />
            </li>
            <li className="another_li">
              <img
                src="https://nullpunkt.co/cdn/shop/files/natrue-logo_312128d2-0a32-49a3-92bb-d75aac015ee2.png?v=1692874522"
                alt=""
              />
            </li>
            <li className="another_li">
              <img
                src="https://nullpunkt.co/cdn/shop/files/cosmoprof-logo_1a90e14a-3f2d-4c55-8bb9-903e7da2035e.png?v=1692874519"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="footer_sub">
          <img
            className="boma"
            src="https://nullpunkt.co/cdn/shop/files/ssl-certificate-icon_fa898f26-3904-469f-b9f7-a83faa643eda.png?v=1692874496"
            alt=""
          />
        </div>
        <div className="footer_sub">
          <h1 className="null">nullpunkt</h1>
        </div>
        <div className="footer_sub">
          <ul className="footer_link_ul">
            <div className="kj">legal</div>
            <li className="footer_l_li">terms & conditions</li>
            <li className="footer_l_li">privacy policy</li>
            <li className="footer_l_li">cookies policy</li>
            <li className="footer_l_li">imprint</li>
          </ul>
        </div>
        <div className="footer_sub">
          <ul className="footer_link_ul">
            <div className="kj">service</div>
            <li className="footer_l_li">Get in touch</li>
          </ul>
        </div>
        <div className="footer_sub">
          <ul className="footer_link_ul">
            <div className="kj">find us</div>
            <li className="footer_l_li">Instagram</li>
            <li className="footer_l_li">LinkedIn</li>
          </ul>
        </div>
        <div className="footer_sub">
          {" "}
          <div className="kj">Subscribe to our Newsletter.</div>
          <form onSubmit={onTestClick} className="footer_input_section">
            <div className="kl">
              <input
                type="email"
                className="footer_input"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
              <div className="inputer">
                <button type="submit">sign up</button>

                <div style={{ zIndex: "100000" }}>
                  <ToastContainer />
                </div>
              </div>
            </div>

            <h4 className="deena">
              By signing up for our newsletter you agree to receive emails from
              Nullpunkt and accept our privacy policy.
            </h4>
          </form>
        </div>
      </div>
      <div className="liner"></div>

      <div className="footer_brand">
        <div className="footer_sub_brand">
          <div className="kj">OUR PAYMENT METHODS</div>

          <ul className="payment">
            <li className="pay">
              <img
                className="po"
                src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp"
                alt=""
              />
            </li>
            <li className="pay">
              <img
                className="po"
                src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png"
                alt=""
              />
            </li>
            <li className="pay">
              <img
                className="po"
                src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png"
                alt=""
              />
            </li>
            <li className="pay">
              <img
                className="po"
                src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png"
                alt=""
              />
            </li>
            <li className="pay">
              <img
                className="po"
                src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="footer_sub_brand">
          <div className="kj">DELIVERED WITH</div>
          <ul className="payment">
            <li className="pay">
              <img
                className="buhaa"
                src="https://nullpunkt.co/cdn/shop/files/stiftung-mensch-logo_249f905f-1fb5-40b6-931f-06b70c1cc312.png?v=1692874488&width=1500"
                alt=""
              />
            </li>
            <li className="pay">
              <img
                className="buhaa"
                src="https://nullpunkt.co/cdn/shop/files/dhl-logo_4f0186b0-80fe-4ba5-9d42-5002c7b21d00.png?v=1692874499&width=1500"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
      <h1 className="copyt">
        Copyright ©2024 All rights reserved | Made by DILEESHA
      </h1>
    </div>
  );
};

export default Footer;
