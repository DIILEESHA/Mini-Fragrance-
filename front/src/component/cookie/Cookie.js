import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import "./cookie.css";
const Cookie = () => {
  return (
    <div className="cooker">
      <CookieConsent
        enableDeclineButton
        // location="bottom"
        buttonText="Accept All Cookies"
        declineButtonText="Nope"
        cookieName="myAwesomeCookieName2"
        className="containerClasses"
        style={{
          background: "rgba(0,0,0,0.9)",
          color: "#fff",
          width: "100%",
          margin: "0 auto",
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        declineButtonStyle={{
          color: "#fff",
          fontSize: "13px",
          background: "transparent",
          border: "1px solid #fff",
          fontWeight: "bold",
          borderRadius: "0%",
          paddingInline: "10px",
          display: "none",
        }}
        buttonStyle={{
          color: "#000",
          fontSize: "13px",
          background: "#bcb3af",
          border: "1px solid #fff",
          fontWeight: "500",
          borderRadius: "3px",
          paddingInline: "10px",
        }}
        expires={150}
      >
        <h1 style={{ fontSize: "14px", fontWeight: "200" }}>
          Our website uses cookies to enhance your experience and measure site
          traffic.
        </h1>
      </CookieConsent>
    </div>
  );
};

export default Cookie;
