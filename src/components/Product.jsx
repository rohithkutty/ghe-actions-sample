import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ id, name, quantity, price }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
    </tr>
  );
};

Product.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.string,
};

export default Product;
