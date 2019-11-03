import  React  from 'react';
import {shallow} from 'enzyme';
import Switch from './Switch';
import { findByTestAttr } from './../../../../TestUtils/index';

const setUp = (props = {}) => shallow(<Switch {...props} />)

describe('Switch Component', () => {
    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('Sould render label wrapper', () => {
        // console.log(component.debug());
        const wrapper = findByTestAttr(component, 'switch-label');
        expect(wrapper.length).toBe(1);
    });

    it('Sould render lever', () => {
        const lever = findByTestAttr(component, 'lever');
        expect(lever.length).toBe(1);
    });
});

