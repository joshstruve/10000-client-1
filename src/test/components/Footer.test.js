import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

describe(`Smoke test`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});