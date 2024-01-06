import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanity from "../Sanity/sanity";
import "./single.css";
import { Bars } from "react-loader-spinner";
import Headershop from "../headershop/Headershop";

const SingleProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

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
            productprice
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
          <img src={product.productimg1.asset.url} alt={product.productTitle} />
          <h1>{product.productprice}</h1>
          <h1>{product.productTitle}</h1>

          <Headershop />
        </>
      )}
    </div>
  );
};

export default SingleProduct;
