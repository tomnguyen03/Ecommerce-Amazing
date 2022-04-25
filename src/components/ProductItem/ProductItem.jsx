import React from "react";
import "./productitem.scss";

export default function ProductItem({ ...props }) {
  const stars = [...Array(5)].map((_, index) =>
    index < props.rating ? "bx bxs-star" : "bx bx-star"
  );
  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="product-item__content">
        <div className="product-item__title">{props.title}</div>
        <div className="product-item__rating-price">
          <div className="product-item__rating">
            {stars.map((item, index) => (
              <i className={item} key={index}></i>
            ))}
          </div>
          <div className="product-item__price">${props.price}</div>
        </div>
      </div>
    </div>
  );
}
