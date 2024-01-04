import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      dots:true,
      centerMode: true,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      rtl: true,
    };
    return (
      <div style={{ height: "60vh", padding: "50px" }}>
        <h2>Center Mode</h2>
        <Slider style={{ display: "flex", gap: "30px" }} {...settings}>
          <div className="card" style={{ height: "50vh", width: "50vw" }}>
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://tse2.mm.bing.net/th?id=OIP.y8OtbqFS6BB80Rjb2T6xtAAAAA&pid=Api&P=0&h=220"
              alt=""
            />
          </div>{" "}
          <div className="card" style={{ height: "50vh", width: "50vw" }}>
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://tse2.mm.bing.net/th?id=OIP.y8OtbqFS6BB80Rjb2T6xtAAAAA&pid=Api&P=0&h=220"
              alt=""
            />
          </div>{" "}
          <div className="card" style={{ height: "50vh", width: "50vw" }}>
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://tse2.mm.bing.net/th?id=OIP.y8OtbqFS6BB80Rjb2T6xtAAAAA&pid=Api&P=0&h=220"
              alt=""
            />
          </div>{" "}
          <div className="card" style={{ height: "50vh", width: "50vw" }}>
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://tse2.mm.bing.net/th?id=OIP.y8OtbqFS6BB80Rjb2T6xtAAAAA&pid=Api&P=0&h=220"
              alt=""
            />
          </div>{" "}
          <div className="card" style={{ height: "50vh", width: "50vw" }}>
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://tse2.mm.bing.net/th?id=OIP.y8OtbqFS6BB80Rjb2T6xtAAAAA&pid=Api&P=0&h=220"
              alt=""
            />
          </div>{" "}
          <div className="card" style={{ height: "50vh", width: "50vw" }}>
            <img
              style={{ height: "100%", width: "100%" }}
              src="https://tse2.mm.bing.net/th?id=OIP.y8OtbqFS6BB80Rjb2T6xtAAAAA&pid=Api&P=0&h=220"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
