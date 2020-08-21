import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddSkillForm from '../../components/AddSkillForm/AddSkillForm';

describe(`Smoke test`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddSkillForm />
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});