import React from 'react';
import { shallow, configure } from 'enzyme';
import ButtonInfo from './ButtonInfo';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';

configure({adapter: new Adapter()});

// find each test by attribute (data-test name)
const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

describe('ButtonInfo Component', () => {

  describe('Checking PropTypes', () => {

    it('Should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Some text'
      }

      const propsError = checkProps(ButtonInfo, expectedProps)
        expect(propsError).toBeUndefined()
    })

  })
  describe('Component Renders', () => {

    let wrapper
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Some text'
      }
      wrapper = shallow(<ButtonInfo {...props} />)
    })

    it('Should render without error', () => {
      const component = findByTestAttr(wrapper, 'buttonInfoComponent')
      expect(component.length).toBe(1)
    })

    it('Should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle')
      expect(title.length).toBe(1)
    })
    it('Should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'componentDesc')
      expect(desc.length).toBe(1)
    })
  })

  describe('Should NOT Render', () => {

    let wrapper
    beforeEach(() => {
      const props = {
        desc: 'Some text'
      }
      wrapper = shallow(<ButtonInfo {...props} />)
    })
    it('Component is not rendered', () => {
      const component = findByTestAttr(wrapper, 'buttonInfoComponent')
      expect(component.length).toBe(0)
    })
  })
})
