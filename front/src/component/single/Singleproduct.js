import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanity from "../Sanity/sanity";
import "./single.css";
import Spinner from "../spinner/Spinner";

const SingleProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  const [loader, SetLoader] = useState(true);

  useEffect(() => {
    const fetch = () => {
      setTimeout(() => {
        SetLoader(false);
      }, 10000);
    };
    fetch();
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Product ID:", slug); // Log the product ID

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
        console.log("Query Result:", res); // Log the query result

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
        <Spinner />
      ) : (
        <>
          <img src={product.productimg1.asset.url} alt={product.productTitle} />
          <h1>{product.productprice}</h1>
          <h1>{product.productTitle}</h1>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
