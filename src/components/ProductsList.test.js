import React from 'react';
import { shallow } from 'enzyme';

import ProductsList from './ProductsList';
import Product from './ProductComp';
import ProductsData from '../data/db.json';

const { products } = ProductsData;
describe('ProductsList.jsx', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProductsList productsList={products} />);
  });

  it('should render the "Product Name" as second column heading', () => {
    expect(wrapper.find('tr').find('th').at(1).text()).toBe('Product Name');
  });
  it('should render the "Price" as second column heading', () => {
    expect(wrapper.find('tr').find('th').at(3).text()).toBe('Price');
  });

  it("should render the 2nd product's name as props to second 'Product' Component ", () => {
    expect(wrapper.find(Product).at(1).props().name).toBe('product-2');
  });

  it("should render the 2nd product's price as props to second 'Product' Component ", () => {
    expect(wrapper.find(Product).at(1).props().price).toBe('400');
  });
});

describe('Product.jsx', () => {
  const props = { id: '1', name: 'Product name', quantity: '4', price: '100' };
  let wrapper = shallow(<Product {...props} />);
  const { id, name, quantity, price } = props;
  it("should render the 2nd product's price as props to second 'Product' Component ", () => {
    expect(wrapper.find('td').at(0).text()).toBe(id);
    expect(wrapper.find('td').at(1).text()).toBe(name);
    expect(wrapper.find('td').at(2).text()).toBe(quantity);
    expect(wrapper.find('td').at(3).text()).toBe(price);
  });
});
