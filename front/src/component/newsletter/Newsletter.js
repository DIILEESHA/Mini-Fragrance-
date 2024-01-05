import React from "react";
import "./newsleeter.css";
import { IoMdClose } from "react-icons/io";

const Newsletter = ({ closePopup }) => {
  return (
    <div className="newsletter_container">
      <div className="news_card">
        <div className="news_grid">
          <div className="news_sub_grid">
            <img
              src="https://nullpunkt.co/cdn/shop/files/03_IBUKUN_720_5.jpg?v=1670235142&width=1500"
              alt=""
            />
          </div>
          <div className="news_sub_grid">
            <div className="close">
              <IoMdClose className="closeicon" onClick={closePopup} />
            </div>

            <h1 className="newstitl">Want First Dibs?</h1>

            <p className="news_para">
              Join our email list and be the first to know about new limited
              edition products, material innovations, and lots of other fun
              updates.
            </p>

            <form className="news_input_section">
              <div className="input">
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email Here"
                />
              </div>

              <div className="news_btn">
                <button>sign up</button>
              </div>
            </form>

            <p className="privacy">
              Note: You can opt-out at any time. See our
              <span style={{ textDecoration: "underline", margin: "0px 5px" }}>
                Privacy Policy
              </span>
              and{" "}
              <span style={{ textDecoration: "underline", margin: "0px 5px" }}>
                Terms.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
