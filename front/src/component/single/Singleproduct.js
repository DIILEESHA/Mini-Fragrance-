import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanity from "../Sanity/sanity";
import "./single.css";
import { Bars } from "react-loader-spinner";
import Headershop from "../headershop/Headershop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../header/CustomArrow";
import Footer from "../footer/Footer";
import { PortableText } from "@portabletext/react";
import { IoIosArrowDown } from "react-icons/io";

const SingleProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [showUsage, setShowusage] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showIng, setShowIng] = useState(false);
  // handleIng

  const handleIng = () => {
    setShowIng(!showIng);
    setShowWarning(false);
    setShowusage(false);
  };

  const handleUsage = () => {
    setShowusage(!showUsage);
    setShowWarning(false);
    setShowIng(false);
  };

  const handleWarning = () => {
    setShowWarning(!showWarning);
    setShowusage(false);
    setShowIng(false);
  };
  const [loader, SetLoader] = useState(true);

  useEffect(() => {
    const fetch = () => {
      setTimeout(() => {
        SetLoader(false);
      }, 1800);
    };
    fetch();
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Product ID:", slug);

        const productQuery = `*[_type == "product" && slug.current == "${slug}"]{
            productTitle,
            slug,
            productimg1 { asset->{ _id, url }},
            productimg2 { asset->{ _id, url }},
            productimg3 { asset->{ _id, url }},
            productimg4 { asset->{ _id, url }},
            productprice,
            productpreviousprice,
            singleproductbody,
            singleproductbody1,
            singleproductbody2,singleproductbody3
          }`;

        const res = await sanity.fetch(productQuery);
        console.log("Query Result:", res);

        setProduct(res[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    autoplaySpeed: 1200,
    speed: 2000,
    autoplay: true,
    infinite: false,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    className: "hd",
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="single_component">
      {loader ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgb(243, 241, 241)",
          }}
        >
          <Bars
            height="80"
            width="80"
            color="#333"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          {/*
            <h1>{product.productprice}</h1>
          <h1>{product.productTitle}</h1> */}

          <div className="single_product_grid">
            <div className="single_pro_sub_grid1">
              <Slider {...settings}>
                <img
                  className="single_product_sub_img"
                  src={product.productimg1.asset.url}
                  alt={product.productTitle}
                />
                <img
                  className="single_product_sub_img"
                  src={product.productimg2.asset.url}
                  alt={product.productTitle}
                />
                <img
                  className="single_product_sub_img"
                  src={product.productimg3.asset.url}
                  alt={product.productTitle}
                />{" "}
                <img
                  className="single_product_sub_img"
                  src={product.productimg4.asset.url}
                  alt={product.productTitle}
                />
              </Slider>
            </div>
            <div className="single_pro_sub_grid">
              <div className="singla_name">
                <Link className="linka" to="/">
                  <h2 className="single_name">home</h2>
                </Link>
                <h2 className="single_name">/</h2>
                <h2 className="single_name">{product.productTitle}</h2>
              </div>

              <div className="single_titleone">{product.productTitle}</div>

              <div className="price_set">
                <h3 className="new_price">{product.productprice}.00</h3>
                <h3 className="previous_price">
                  <del>${product.productpreviousprice}</del>
                </h3>
              </div>

              <div className="product_desc">
                <p>
                  <PortableText value={product.singleproductbody} />
                </p>
              </div>

              <div className="extra">
                <div className="usage">
                  <div className="lkj"></div>

                  <div className="ico_extra" onClick={handleUsage}>
                    <h3 className="extra_title">functionality</h3>
                    <IoIosArrowDown />
                  </div>

                  {showUsage && (
                    <p className="extra_p">
                      <PortableText value={product.singleproductbody1} />
                    </p>
                  )}
                  <div className="lkj"></div>
                </div>
                <div className="warning">
                  <div className="ico_extra" onClick={handleWarning}>
                    <h3 className="extra_title">how to apply</h3>
                    <IoIosArrowDown />
                  </div>

                  {showWarning && (
                    <p className="extra_p">
                      <PortableText value={product.singleproductbody2} />
                    </p>
                  )}
                  <div className="lkj"></div>
                </div>

                <div className="warning">
                  <div className="ico_extra" onClick={handleIng}>
                    <h3 className="extra_title">Conscious Ingredients</h3>
                    <IoIosArrowDown />
                  </div>

                  {showIng && (
                    <p className="extra_p">
                      <PortableText value={product.singleproductbody3} />
                    </p>
                  )}
                  <div className="lkj"></div>
                </div>
              </div>
            </div>
          </div>
          <Headershop />
        </>
      )}
    </div>
  );
};

export default SingleProduct;
