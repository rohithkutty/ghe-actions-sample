import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AllProductsPage from './AllProductsPage';
import ProductsList from '../components/ProductsList';
import ProductsData from '../data/db.json';

const { products } = ProductsData;
describe('AllProductsPage.jsx', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AllProductsPage />);
  });

  it('should render the correct heading', () => {
    expect(wrapper.find('h2').text()).toEqual('Products list');
  });
});

describe('When productsList array passed to ProductsList is null', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      productsList: null,
    };
    wrapper = shallow(<ProductsList {...props} />);
  });

  it('should not crash', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('When productsList array passed to ProductsList', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      productsList: products,
    };
    wrapper = shallow(<ProductsList {...props} />);
  });

  it('should not crash', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
