import React, { useEffect, useState } from "react";
import "./shop.css";
import '../../component/headershop/headershop.css'
import Footer from "../../component/footer/Footer";
import sanity from "../../Sanity/sanity";

import { Link } from "react-router-dom";
import Atropos from "atropos/react";
import "atropos/css";
import { Bars } from "react-loader-spinner";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loader, SetLoader] = useState(true);

  useEffect(() => {
    const fetch = () => {
      setTimeout(() => {
        SetLoader(false);
      }, 2800);
    };
    fetch();
  });

  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      // **create slug and these slug autogenerated , these slug used to navigate to single component
      try {
        const productQuery = `*[_type == "product"]{
          productTitle,
          slug,  

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

  const individualCardSliderSettings = {
    dots: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1,
    arrows: false,
    autoplay: false,
  };

  return (
    <div className="shop_container">
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
          <div className="muba">
            <h2 className="nuba">all products</h2>
            <Atropos
              style={{ background: "" }}
              activeOffset={0}
              shadow={true}
              shadowScale={0}
              rotateYMax={0}
              rotateXMax={0}
              onEnter={() => console.log("Enter")}
              onLeave={() => console.log("Leave")}
              onRotate={(y, x) => console.log("Rotate", y, x)}
            >
              <div className="shop_grider">
                {products.map((header) => (
                  <div className="shop_sub_grider">
                    <Link
                      className="linka"
                      onClick={handleClicks}
                      to={`/product/${header.slug?.current}`}
                      key={header.slug?.current}
                    >
                      <img
                      className="nima"
                        src={header.productimg1.asset.url}
                        alt={header.productTitle}
                        loading="lazy"
                        title={header.productTitle}
                      />

                      <div className="meeba">
                        <h4 className="price">{header.productprice}</h4>
                        <h3 className="shop_title ">
                          <div className="arrower" />

                          {header && header.productTitle}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Atropos>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Shop;
