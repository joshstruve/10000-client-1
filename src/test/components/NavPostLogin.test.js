import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NavPostLogin from '../../components/Header/NavPostLogin';

describe(`Smoke test`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <NavPostLogin />
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});