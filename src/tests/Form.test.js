import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
import Enzyme from 'enzyme'
import { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Sinon from 'sinon';


Enzyme.configure({adapter: new EnzymeAdapter() });

describe('Form', () => {

  it("renders correctly", () => {
    const form = shallow(<Form />);
    expect(form).toMatchSnapshot();
  });

  it('calls handleSubmit fn on click', () => {
    const handleChangeSpy = Sinon.spy(Form.prototype, 'handleSubmit')
    const wrapper = shallow(
      <Form />
    );
    const event = { preventDefault() {}};
    wrapper.find('form').simulate('submit', event)
    expect(handleChangeSpy.calledOnce).toEqual(true)
  })

it('responds to a change in income', () => {
    const handleChangeSpy = Sinon.spy(Form.prototype, 'handleChange');
    const event = {target: {value: 'Rick'}};
    const wrapper = shallow(
      <Form />
    );
    wrapper.find('.name').simulate('change', event);
    expect(handleChangeSpy.calledOnce).toEqual(true)
  })
})
