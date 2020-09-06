import React, { Component } from "react";
import ProductsList from "../components/ProductsList";

import "./AllProductsPage.styles.css";
import ProductsData from "../data/db.json";

export default class AllProductsPage extends Component {
  render() {
    const { products } = ProductsData;
    return (
      <div>
        <h2 className="products-header">Products List</h2>
        <ProductsList productsList={products} />
      </div>
    );
  }
}
