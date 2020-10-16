import React, { Component } from "react";
import ProductItem from "./ProductItem";
import productsData from "./productsData";

class ProductsList extends Component {
  state = {
    total: 0,
    currency: "USD"
  };

  buyProduct = (price) => {
    this.setState((prevState) => ({
      total: prevState.total + price
    }));
  };
  changeCurrency = (value) => {
    this.setState((prevState) => ({
      currency: value
    }));
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeCurrency("USD")} value="USD">
          USD
        </button>
        <button onClick={() => this.changeCurrency("EUR")} value="EUR">
          EUR
        </button>
        <button onClick={() => this.changeCurrency("UAH")} value="UAH">
          UAH
        </button>
        <button onClick={() => this.changeCurrency("RUB")} value="RUB">
          RUB
        </button>
        <div className="row">
          {productsData.map(({ id, name, description, price }) => (
            <div className="col" key={id}>
              <ProductItem
                id={id}
                name={name}
                description={description}
                price={price}
                buyProduct={this.buyProduct}
                currency={this.state.currency}
              />
            </div>
          ))}
        </div>
        <h2>
          Total:
          {this.state.currency === "EUR"
            ? this.state.total * 0.85
            : this.state.currency === "UAH"
            ? this.state.total * 28.36
            : this.state.currency === "RUB"
            ? this.state.total * 78.3
            : this.state.total}{" "}
          {this.state.currency}
        </h2>
      </div>
    );
  }
}

export default ProductsList;
