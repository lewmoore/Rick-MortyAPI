import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
import Enzyme from 'enzyme'
import { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'


Enzyme.configure({adapter: new EnzymeAdapter() });

describe('Form', () => {

  const form = shallow(<Form />);

  it("renders correctly", () => {
    expect(form).toMatchSnapshot();
  });
})
