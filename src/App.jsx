import { useState } from "react";
import "./App.css";
import Cart from "./Cart";
import imgbaklavaDesk from "./assets/image-baklava-desktop.jpg";
import imgbrownieDesk from "./assets/image-brownie-desktop.jpg";
import imgcakeDesk from "./assets/image-cake-desktop.jpg";
import imgcremeDesk from "./assets/image-creme-brulee-desktop.jpg";
import imgmacaronDesk from "./assets/image-macaron-desktop.jpg";
import imgmeringueDesk from "./assets/image-meringue-desktop.jpg";
import imgpannaDesk from "./assets/image-panna-cotta-desktop.jpg";
import imgtiramisuDesk from "./assets/image-tiramisu-desktop.jpg";
import imgwaffleDesk from "./assets/image-waffle-desktop.jpg";

function App() {
  //array for each cart
  const cartData = [
    {
      imgSrc: imgbaklavaDesk,
      head: "baklava",
      desc: "baklava",
      price: 6.5,
    },
    {
      imgSrc: imgbrownieDesk,
      head: "brownie",
      desc: "brownie",
      price: 7,
    },
    {
      imgSrc: imgcakeDesk,
      head: "cake",
      desc: "cake",
      price: 6,
    },
    {
      imgSrc: imgcremeDesk,
      head: "creme brulee",
      desc: "creme",
      price: 3,
    },
    {
      imgSrc: imgmacaronDesk,
      head: "macaron",
      desc: "macaron",
      price: 5,
    },
    {
      imgSrc: imgmeringueDesk,
      head: "meringue",
      desc: "meringue",
      price: 6.6,
    },
    {
      imgSrc: imgpannaDesk,
      head: "panna",
      desc: "panna",
      price: 10,
    },
    {
      imgSrc: imgtiramisuDesk,
      head: "tiramisu",
      desc: "tiramisu",
      price: 7,
    },
    {
      imgSrc: imgwaffleDesk,
      head: "waffle",
      desc: "waffle",
      price: 6,
    },
  ];

  return (
    <>
      <div className="MainDiv">
        {/* left Side with menu */}
        <div className="Container">
          <div className="leftSide">
            <h1 className="heading">Desserts</h1>

            {/* Contains all carts */}
            <div className="CartBox">
              {cartData.map((cart) => (
                <Cart cartObj={cart} key={cart.head} />
              ))}
            </div>
          </div>

          {/* right side with order history and bill */}
          <div className="rightSide">
            <h1 className="headingLeft">Your Cart(1)</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
