import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddSkill from '../../routes/AddSkill';

describe(`Smoke test`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddSkill />
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});