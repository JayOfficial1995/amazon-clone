import React from "react";
import StarIcon from "@material-ui/icons/Star";

import { ProductStyle } from "./Product.style";

type ProductType = {
  title: string;
  price: string;
  ratings: number;
  imageSrc: string;
  imageAlt: string;
};

function Product(props: ProductType) {
  const { title, price, ratings, imageSrc, imageAlt } = props;
  return (
    <ProductStyle>
      <article className="product-info">
        <h2 className="title">{title}</h2>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <span className="product-rating">
          {Array(ratings)
            .fill(0)
            .map((_) => (
              <StarIcon className="star-icon" />
            ))}
        </span>
        <img src={imageSrc} alt={imageAlt} className="card-image" />

        <button className="add-to-card-btn">Add To Cart</button>
      </article>
    </ProductStyle>
  );
}

export default Product;
