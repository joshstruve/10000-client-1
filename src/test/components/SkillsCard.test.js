import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SkillsCard from '../../components/Skills/SkillsCard';

describe(`Smoke test`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement('div');
    const skl = {
        time_left: 36000000000,
        title: 'React',
        id: 1
    }
    ReactDOM.render(
      <BrowserRouter>
        <SkillsCard skill={skl}/>
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});