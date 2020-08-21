import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';

describe(`Smoke test`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});