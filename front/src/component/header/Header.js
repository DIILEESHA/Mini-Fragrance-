import React, { useEffect, useState } from "react";
import "./header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Nav from "../nav/Nav";
import client from "../Sanity/sanity.js";
import Lgnav from "../nav/Lgnav.js";
import { PrevArrow, NextArrow } from "./CustomArrow";
import ParticleComponent from "../particle/ParticleComponent.js";

const Header = () => {
  const showParticles = false;

  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const query = `*[_type == "header"]{
          title,
          mainheaderImage{
            asset->{
              _id,
              url
            }
          }
        }`;
        const res = await client.fetch(query);

        setImage(res);

        console.log(res);
      } catch (error) {
        console.log("error fetching", error);
      }
    };
    fetchHeader();
  }, []);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    // rtl: true,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="header_container">
      <ParticleComponent isVisible={!showParticles} />

      <Nav />
      <Lgnav />
      <Slider {...settings}>
        {image &&
          image.map((header, index) => (
            <div className="image_container">
              <div className="imager">
                <div className="adapter" key={index}>
                  <img
                    style={{ height: "100vh" }}
                    src={header?.mainheaderImage?.asset?.url}
                    alt={header?.title}
                  />
                  <div className="adpter_abs">
                    <h2>Fragrance follows function</h2>
                  </div>{" "}
                  <div className="adpter_abs2">
                    <h2>shop now ♥</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Header;
