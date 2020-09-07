import React from 'react';

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

export default Product;
