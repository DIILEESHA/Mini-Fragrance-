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

import { PortableText } from "@portabletext/react";
import {
  IoIosArrowDown,
  IoIosArrowRoundUp,
  IoIosArrowUp,
} from "react-icons/io";
import { useCart } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer/Footer";

const SingleProduct = () => {
  const notify = () =>
    toast.success("Add to cart Successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [showUsage, setShowusage] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showIng, setShowIng] = useState(false);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
    notify();
  };

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
      }, 2800);
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
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    // rtl: true,
    autoplay: true,
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

              <div className="qua">
                <input
                  type="number"
                  min="1"
                  className="elom"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value)))
                  }
                />

                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>

              <div className="extra">
                <div className="usage">
                  <div className="lkj"></div>

                  <div className="ico_extra" onClick={handleUsage}>
                    <h3 className="extra_title">functionality</h3>
                    {showUsage ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
                    {showWarning ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
                    {showIng ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>

                  {showIng && (
                    <p className="extra_p">
                      <PortableText value={product.singleproductbody3} />
                    </p>
                  )}
                  <div className="lkj"></div>
                </div>
              </div>

              <div className="checkout">
                <div className="checkout_box">
                  <div className="checkout_title">
                    <h2>Guaranteed Safe Checkout</h2>
                  </div>

                  <ul className="checkout_ul">
                    <li className="check_li">
                      <img
                        src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-01.png.webp"
                        alt=""
                      />
                    </li>
                    <li className="check_li">
                      <img
                        src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-02.png.webp"
                        alt=""
                      />
                    </li>
                    <li className="check_li">
                      <img
                        src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-03.png.webp"
                        alt=""
                      />
                    </li>
                    <li className="check_li">
                      <img
                        src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-04.png.webp"
                        alt=""
                      />
                    </li>
                    <li className="check_li">
                      <img
                        src="https://preview.colorlib.com/theme/cozastore/images/icons/icon-pay-05.png.webp"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Headershop />
          <Footer />
        </>
      )}
    </div>
  );
};

export default SingleProduct;
