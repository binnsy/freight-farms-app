import React from 'react';
import { shallow, configure } from 'enzyme';
import HelloButton from './HelloButton';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';

configure({adapter: new Adapter()});

// could use this in global file for other test components and then import as needed
const setUp = (props={}) => {
  const component = shallow(<HelloButton {...props} />)
  return component
}

// find each test by attribute (data-test name)
const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

describe('Button Component', () => {

  describe('Checking PropTypes', () => {

    it('Should NOT throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      }

      const propsError = checkProps(HelloButton, expectedProps)
        expect(propsError).toBeUndefined()
    })

  })

  describe('Renders', () => {

    let wrapper
    beforeEach(() => {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      }
      wrapper = shallow(<HelloButton {...props} />)
    })
    it('Should Render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent')
      expect(button.length).toBe(1)
    })
  })

})
