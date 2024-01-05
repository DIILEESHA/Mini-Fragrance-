import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./headershop.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "../velo/Section";
import sanity from "../Sanity/sanity";
import { PrevArrow, NextArrow } from "../header/CustomArrow";

export default function Headershop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productQuery = `*[_type == "product"]{
          productTitle,
          productimg1 { asset->{ _id, url }},
          productimg2 { asset->{ _id, url }},
          productimg3 { asset->{ _id, url }},
          productimg4 { asset->{ _id, url }},
          productprice
        }`;

        const res = await sanity.fetch(productQuery);

        setProducts(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const mainSliderSettings = {
    dots: false,
    speed: 1900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3200,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    cssEase: "linear",
    autoplay: true,
    rtl: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "custom-slider",
  };

  const individualCardSliderSettings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1,
    arrows: false,
    autoplay: false,
    customPaging: (i) => (
      <div className="custom-dot" key={i}>
        {/* You can customize the dot content here */}
        {/* {i + 1} */}
        {/* x */}
      </div>
    ),
  };

  return (
    <div className="main_headershop">
      <Section />
      <div className="mainer">
        <Slider {...mainSliderSettings}>
          {products &&
            products.map((header, index) => (
              <div key={index} className="">
                <div className="">
                  <Slider {...individualCardSliderSettings}>
                    {header.productimg1 && (
                      <div className="sub_shop" key={`main-${index}-img1`}>
                        <img
                          src={header.productimg1.asset.url}
                          alt={header.productTitle}
                          loading="lazy"
                          title={header.productTitle}
                        />
                      </div>
                    )}
                    {header.productimg2 && (
                      <div className="sub_shop" key={`main-${index}-img2`}>
                        <img
                          src={header.productimg2.asset.url}
                          alt={header.productTitle}
                          loading="lazy"
                        />
                      </div>
                    )}
                    {header.productimg3 && (
                      <div className="sub_shop" key={`main-${index}-img3`}>
                        <img
                          src={header.productimg3.asset.url}
                          alt={header.productTitle}
                          loading="lazy"
                        />
                      </div>
                    )}
                    {header.productimg4 && (
                      <div className="sub_shop" key={`main-${index}-img4`}>
                        <img
                          src={header.productimg4.asset.url}
                          alt={header.productTitle}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </Slider>

                  <h3 className="shop_title">
                    <div className="arrower" />

                    {header.productTitle}
                  </h3>
                  <h4 className="price">{header.productprice}</h4>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
