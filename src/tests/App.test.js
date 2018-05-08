import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Enzyme from 'enzyme'
import { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new EnzymeAdapter() });

describe('App', () => {

  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root'
    ReactDOM.render(<App />, div);;
  });

  it ('Renders welcome message', () => {
    const page = mount(<App />);
    expect(page.text()).toMatch('Rick & Morty')
  });

})
