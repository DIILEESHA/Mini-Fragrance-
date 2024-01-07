// AddToCart.js
import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import "./cart.css";
import { IoMdClose } from "react-icons/io";

const AddToCart = ({ onClose }) => {
  const { cartState } = useCart();
  const [isCartVisible, setCartVisible] = useState(true);

  const [shop, setShop] = useState(false);

  const handleClose = () => {
    setCartVisible(false);
    onClose();
  };

  useEffect(() => {}, []);

  return (
    <div className={`cart-modal ${isCartVisible ? "visible" : ""}`}>
      {cartState.cartItems.length > 0 ? (
        <>
          <div className="cart">
            <div className="fg" onClick={handleClose}>
              <IoMdClose className="closeicon" />
            </div>
            <ul className="cart_ul">
                {cartState.cartItems.map((item, index) => (
                  <li key={index}>
                    <img
                      style={{ width: "30px " }}
                      src={item.product.productimg1.asset.url}
                      alt=""
                    />
                    {item.product.productTitle} - Quantity: {item.quantity}
                    {item.product.productprice}
                  </li>


                  
                ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <button style={{ border: "1px solid red" }} onClick={handleClose}>
            Close
          </button>
          <div>your cart is empty</div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
