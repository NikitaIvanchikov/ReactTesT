import React from "react";

const ProductItem = ({ name, description, price, buyProduct, currency }) => {
  return (
    <div className="product__item">
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>
        Price:
        {currency === "EUR"
          ? price * 0.85
          : currency === "UAH"
          ? price * 28.36
          : currency === "RUB"
          ? price * 78.3
          : price}{" "}
        {currency}
      </h3>
      <button onClick={() => buyProduct(price)}>Buy</button>
    </div>
  );
};

export default ProductItem;
