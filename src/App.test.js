import React from 'react';
import { shallow, render, mount } from 'enzyme';

import App from './App';
import AllProductsPage from './pages/AllProductsPage';

describe('App.jsx', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render the "AllProductsPage" component', () => {
    expect(wrapper.find(AllProductsPage).length).toBe(1);
  });
});
