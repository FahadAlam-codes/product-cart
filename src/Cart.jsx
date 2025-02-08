import { useState } from "react";
import "./Cart.css";
import imgAddToCart from "./assets/icon-add-to-cart.svg";

function Cart(props) {
  const [count, setCount] = useState(0);
  const [inc, setInc] = useState(0);

  function HandleClickIncrement() {
    setInc(inc + 1);
  }

  function HandleClickDecrement() {
    setInc(inc - 1);
  }

  return (
    <>
      <div className="CartDiv">
        {/* Image and Add to cart btn div */}
        <div className="img-addToCart">
          <div className="cartImg">
            <img src={props.cartObj.imgSrc} alt="img" />
          </div>

          {/* add to cart button */}
          <div
            className="addCart"
            style={inc > 0 ? { background: "var(--Red)" } : {}}
          >
            {inc === 0 ? (
              <div className="img-text" onClick={HandleClickIncrement}>
                <img className="imgAddToCart" src={imgAddToCart} />
                <span className="atext">Add to cart</span>
              </div>
            ) : (
              <>
                <svg
                  style={
                    inc > 0
                      ? { border: "1px solid var(--Rose-100)" }
                      : { border: "1px solid var(--Red)" }
                  }
                  onClick={HandleClickDecrement}
                  className="imgAddToCart btn"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path
                    fill={inc > 0 ? "var(--Rose-100)" : "var(--Red)"}
                    d="M0 .375h10v1.25H0V.375Z"
                  />
                </svg>

                <span
                  className="counter"
                  style={
                    inc > 0
                      ? { color: "var(--Rose-100)" }
                      : { color: "var(--Red)" }
                  }
                >
                  {inc}
                </span>

                <svg
                  style={
                    inc > 0
                      ? { border: "1px solid var(--Rose-100)" }
                      : { border: "1px solid var(--Red)" }
                  }
                  onClick={HandleClickIncrement}
                  className="imgAddToCart btn"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill={inc > 0 ? "var(--Rose-100)" : "var(--Red)"}
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </>
            )}
          </div>
          <div className="Name">
            <p className="nameHead">{props.cartObj.head}</p>
            <h5 className="nameDesc fSize">{props.cartObj.desc}</h5>
            <p className="namePrice fSize">${props.cartObj.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
