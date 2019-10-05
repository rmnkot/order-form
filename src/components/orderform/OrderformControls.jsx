import React, { Component } from 'react';
import { FaPencilAlt, FaParagraph, FaDesktop } from 'react-icons/fa';

import TypeOfPaper from './controls/TypeOfPaper';
import Subject from './controls/Subject';
import Pages from './controls/Pages';

import PillsGroup from './controls/PillsGroup';

export default class OrderformControls extends Component {
    state = {
        pills: {
            workType: {
                name: 'workType',
                value: '1',
                type: 'radio',
                params: [
                    {id: '01', icon: <FaPencilAlt />, text: 'WRITING', comment: 'from scratch'},
                    {id: '02', icon: <FaParagraph />, text: 'EDITING',comment: 'existing paper'},
                    {id: '03', icon: <FaDesktop />, text: 'SLIDES',comment: 'presentation'}
                ],
                lable: 'Select Type of Work'
            },
            academicLevel: {
                name: 'academicLevel',
                value: '1',
                type: 'radio',
                params: [
                    {id: '010', text: 'High school'},
                    {id: '020', text: 'College'},
                    {id: '030', text: 'University'},
                    {id: '040', text: 'Master`s'},
                    {id: '050', text: 'Ph.D.'}
                ],
                lable: 'Academic Level'
            },
            paperFormat: {
                name: 'paperFormat',
                value: '1',
                type: 'radio',
                params: [
                    {id: '10', text: 'MLA'},
                    {id: '20', text: 'APA'},
                    {id: '30', text: 'Chicago'},
                    {id: '40', text: 'Harvard'},
                    {id: '50', text: 'Other'}
                ],
                lable: 'Paper Format'  
            }
        }
    }

    handlePillsClick = (e) => {
        e.persist();
        
        this.setState(prevState => ({
            pills: {
                ...prevState.pills,
                [e.target.name]: {
                    ...prevState.pills[e.target.name],
                    value: e.target.value
                }
            }
        }))
    }

    render() {
        const {pills} = this.state;

        return (
            <div>
                {Object.values(pills).map((item, index) =>(
                    <PillsGroup 
                        key={index}
                        data={item}
                        handlePillsClick={this.handlePillsClick}
                    />
                ))}

                <TypeOfPaper />
                <Subject />
                <Pages />
            </div>
        );
    }
}
