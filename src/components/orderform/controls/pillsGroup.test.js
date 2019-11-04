import  React  from 'react';
import {shallow} from 'enzyme';
import PillsGroup from './PillsGroup';
import { findByTestAttr } from './../../../../TestUtils/index';


const setUp = (props = {}) => shallow(<PillsGroup {...props} />);

describe('PillsGroup Component', () => {
    
    
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                data: {
                    name: 'workType',
                    value: '1',
                    params: [
                        {id: 1, name: 'test'}
                    ],
                    label: 'Select Type of Work'
                }, 
                setWorkType: () => {}
            }
            wrapper = setUp(props);
        });

        it('Should render PillButton', () => {
            const button = findByTestAttr(wrapper, 'pill-button');
            expect(button.length).toBe(1);
        });

    });

    describe('Have NO props', () => {

    });
});