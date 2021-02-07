import React from "react";

import Product from "../../component/Product/Product";
import { HomeStyle } from "./Home.style";

function Home() {
  return (
    <HomeStyle>
      <section className="home-container">
        <picture className="banner-wrapper">
          <img
            src="./images/amazon-banner.jpg"
            alt="site banner"
            className="banner-image"
          />
        </picture>

        <article className="items-container">
          <Product
            title="Men Shoes"
            price="100.00"
            ratings={5}
            imageSrc="./images/product-images/nike-shoe.png"
            imageAlt="Nike Shoe"
          />
          <Product
            title="Ladies Bag"
            price="90.00"
            ratings={4}
            imageSrc="./images/product-images/women-bag.png"
            imageAlt="Women Bag"
          />
        </article>

        <article className="items-container">
          <Product
            title="Apple Watch"
            price="120.00"
            ratings={4}
            imageSrc="./images/product-images/apple-watch.png"
            imageAlt="Apple Watch"
          />
          <Product
            title="Iphone X"
            price="290.00"
            ratings={5}
            imageSrc="./images/product-images/iphone.png"
            imageAlt="Iphone X Image"
          />
          <Product
            title="Ipad 7th Generation"
            price="250.00"
            ratings={5}
            imageSrc="./images/product-images/IPad.png"
            imageAlt="Ipad"
          />
        </article>

        <article className="items-container">
          <Product
            title="Laptop"
            price="130.00"
            ratings={4}
            imageSrc="./images/product-images/laptop.png"
            imageAlt="Laptop"
          />
        </article>
      </section>
    </HomeStyle>
  );
}

export default Home;
