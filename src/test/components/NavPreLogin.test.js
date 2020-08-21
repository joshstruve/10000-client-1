import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NavPreLogin from '../../components/Header/NavPreLogin';

describe(`Smoke test`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <NavPreLogin />
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});