import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
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
          productsList.map(({ id, name, quantity, price }) => (
            <Product key={id} id={id} name={name} quantity={quantity} price={price} />
          ))}
      </tbody>
    </table>
  );
};

ProductsList.propTypes = {
  productsList: PropTypes.array,
};

export default ProductsList;
