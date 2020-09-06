import React from 'react';
import Product from './ProductComp';
import './ProductsList.styles.css';

const ProductsList = ({ productsList }) => {
  return (
    <table border='1px' className='products-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsList &&
          productsList.map(({ id, ...remainingProductDetails }) => (
            <Product key={id} id={id} {...remainingProductDetails} />
          ))}
      </tbody>
    </table>
  );
};

export default ProductsList;
