import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Enzyme from 'enzyme'
import { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  div.id = 'root'
  ReactDOM.render(<App />, div);;
});

it ('Renders welcome message', () => {
  const page = mount(<App />);
  expect(page.text()).toMatch('Hello World')
})
