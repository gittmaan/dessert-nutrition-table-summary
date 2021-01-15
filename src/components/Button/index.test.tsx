import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Button from './index';

describe('Button', () => {
  let wrapper;
  const onClick = jest.fn();

  beforeAll(() => {
    wrapper = shallow(<Button onClick={onClick}>Click me!</Button>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render Button properly', () => {
    expect(wrapper.text()).toBe('Click me!');
  });

  it('click event', () => {
    wrapper.simulate('click');
    expect(onClick).toBeCalled();
  });

});