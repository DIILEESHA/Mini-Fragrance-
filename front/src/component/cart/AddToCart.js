// AddToCart.js
import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import "./cart.css";
import { IoMdClose } from "react-icons/io";
import { LiaHandPeaceSolid } from "react-icons/lia";

const AddToCart = ({ onClose }) => {
  const { cartState, removeFromCart, updateQuantity } = useCart();
  const [isCartVisible, setCartVisible] = useState(true);

  const calculateSubtotal = () => {
    const subtotal = cartState.cartItems.reduce((total, item) => {
      const price = parseFloat(item.product.productprice.replace("$", ""));

      if (!isNaN(price)) {
        const itemTotal = price * item.quantity;

        return total + itemTotal;
      } else {
        return total;
      }
    }, 0);

    return subtotal.toFixed(0);;
  };

  const handleClose = () => {
    setCartVisible(false);
    onClose();
  };

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  const handleIncreaseQuantity = (index) => {
    updateQuantity(index, cartState.cartItems[index].quantity + 1);
  };

  const handleDecreaseQuantity = (index) => {
    const newQuantity = Math.max(1, cartState.cartItems[index].quantity - 1);
    updateQuantity(index, newQuantity);
  };

  useEffect(() => {}, []);
  console.log(cartState.cartItems);
  return (
    <div className={`cart-modal ${isCartVisible ? "visible" : ""}`}>
      {cartState.cartItems.length > 0 ? (
        <>
          <div className="cart">
            <div className="fg" onClick={handleClose}>
              <IoMdClose className="closeicon ok" />
            </div>
            <h2 className="small">
              Congrats! You get free standard shipping
              <LiaHandPeaceSolid className="sux" />
            </h2>
            <div className="linef"></div>
            <div className="demar">
              <div className="mular">
                <div className="gasp">
                  {cartState.cartItems.map((item, index) => (
                    <div key={index}>
                      <div className="cart_ul" key={index}>
                        <div className="cart_sub">
                          <img
                            className="bumba"
                            src={item.product.productimg1.asset.url}
                            alt=""
                          />
                        </div>

                        <div className="cart_sub">
                          <h2 className="tita">{item.product.productTitle}</h2>
                          <div className="quant_btn">
                            <button
                              className="meow"
                              onClick={() => handleDecreaseQuantity(index)}
                            >
                              -
                            </button>
                            {item.quantity}
                            <button
                              className="meow"
                              onClick={() => handleIncreaseQuantity(index)}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="cart_sub">
                          <IoMdClose
                            onClick={() => handleRemoveFromCart(index)}
                            className="oy"
                          />

                          {item.product.productprice}
                        </div>
                      </div>
                      <div className="am"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mular m">
                <div className="checkout_session">
                  <div className="total_section">
                  <div className="word_section">
                      <h2 className="sub">sub total</h2>
                      <h3 className="total">${calculateSubtotal()}</h3>
                    </div> <div className="word_section">
                      <h2 className="sub">shipping</h2>
                      <h3 className="total">free</h3>
                    </div>
                  </div>
                  <button className="check">proceed to checkout</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="cart g">
          <div className="fg" onClick={handleClose}>
            <IoMdClose className="closeicon ok" />
          </div>
          <div className="gr">
            <img
              src="https://minimalist-e-commerce.vercel.app/static/media/empty-cart.17f48bd13327a233e04a.png"
              alt=""
            />

            <div>Your cart is currently empty!</div>
            <button className="continue">continue shopping</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
