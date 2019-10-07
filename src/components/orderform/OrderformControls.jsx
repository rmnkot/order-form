import React, { Component } from 'react';
import { FaPencilAlt, FaParagraph, FaDesktop } from 'react-icons/fa';

import Range from './utils/Range';

import PillsGroup from './controls/PillsGroup';
import SelectGroup from './controls/SelectGroup';

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
        },
        selects: {
            paperType: {
                name: 'paperType',
                id: 'paperType',
                value: '1',
                searchValue: '',
                searchDisabled: false,
                options: [
                    {val: '1', text: 'Essay (Any Type)'},
                    {val: '18', text: 'Admission Essay'},
                    {val: '20', text: 'Scholarship Essay'},
                    {val: '19', text: 'Personal Statement'},
                    {val: '4', text: 'Research Paper'},
                    {val: '2', text: 'Case Study'},
                    {val: '3', text: 'Term Paper'},
                    {val: '7', text: 'Coursework'},
                    {val: '5', text: 'Book Review'},
                    {val: '6', text: 'Movie Review'},
                    {val: '8', text: 'Annotated Bibliography'},
                    {val: '9', text: 'Article'},
                    {val: '10', text: 'Assignment'},
                    {val: '11', text: 'Dissertation'},
                    {val: '12', text: 'Lab Report'},
                    {val: '13', text: 'Math Problem'},
                    {val: '15', text: 'Speech'},
                    {val: '16', text: 'Statistics Report'},
                    {val: '17', text: 'PowerPoint Presentation', disabled: true},
                    {val: '21', text: 'Blog Writing'},
                    {val: '22', text: 'Critical Thinking'},
                    {val: '23', text: 'Peer Review'},
                    {val: '24', text: 'Q & A'},
                    {val: '25', text: 'Personal Reflection'},
                    {val: '27', text: 'Capstone Project'},
                    {val: '28', text: 'Creative Writing'}
                ],
                filteredOptions: '',
                label: 'Type of Paper',
                dropdownOpen: false
            },    
            subject: {
                name: 'subject',
                id: 'subject',
                value: '0',
                searchValue: '',
                options: [
                    {val: '0', text: 'Please select subject', disabled: true},
                    {val: '01', text: 'Arts & Humanities', optgroup: [
                        {val: '4', text: 'Culture'},
                        {val: '6', text: 'Education'},
                        {val: '7', text: 'English'},
                        {val: '17', text: 'Linguistics'},
                        {val: '18', text: 'Literature'},
                        {val: '29', text: 'Ethics'},
                        {val: '61', text: 'Art'}
                    ]},
                    {val: '02', text: 'Social Sciences', optgroup: [
                        {val: '12', text: 'History and Anthropology'},
                        {val: '14', text: 'International Relations'},
                        {val: '21', text: 'Philosophy'},
                        {val: '23', text: 'Political Science'},
                        {val: '24', text: 'Psychology'},
                        {val: '25', text: 'Sociology'},
                        {val: '31', text: 'Religion and Theology'},
                        {val: '33', text: 'Gender & Sexual Studies'},
                        {val: '35', text: 'Journalism, mass media and communication'},
                    ]},
                ],
                filteredOptions: '',
                label: 'Subject', 
                dropdownOpen: false
            },    
        }, 
        ranges: {
            pages: {
                name: 'pages',
                min: '1',
                value: '1',
                max: '100',
                label: 'Pages',
                output: true
            },
            sources: {
                name: 'sources',
                min: '0',
                value: '0',
                max: '100',
                label: 'Sources',
                output: false
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
        }), () => {
            
            if (e.target.name === 'workType' && this.state.pills.workType.value === '3') {

                this.setState(prevState => ({
                    selects: {
                        ...prevState.selects,
                        paperType:{
                            ...prevState.selects.paperType,
                            value: '17',
                            filteredOptions: [{val: '17', text: 'PowerPoint Presentation'}],
                            searchDisabled: true
                        }
                    }
                }));
        
            } else if (e.target.name === 'workType' && this.state.pills.workType.value !== '3') {

                this.setState(prevState => ({
                    selects: {
                        ...prevState.selects,
                        paperType:{
                            ...prevState.selects.paperType,
                            value: '1',
                            filteredOptions: '',
                            searchDisabled: false
                        }
                    }
                }));
            }
        })
    }

    // handleSelect = (e) => {
    //     e.persist();

    //     this.setState(prevState => ({
    //         selects: {
    //             ...prevState.selects,
    //             [e.target.name]:{
    //                 ...prevState.selects[e.target.name],
    //                 value: e.target.value
    //             }
    
    //         }
    //     }))
    // }
    
    handleSearch = (name, e) => {
        e.persist(); 

        let filteredArr = [];

        const options = JSON.parse(JSON.stringify(this.state.selects[name].options));

        options.forEach(item => {

            if (item.optgroup) {
                const optgroupEl = item;
                
                optgroupEl.optgroup = item.optgroup.filter(item => (
                    item.text.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
                ));

                optgroupEl.optgroup.length && filteredArr.push(optgroupEl)

            } else {
                (item.text.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) && filteredArr.push(item)
            }
        });

        this.setState(prevState => ({
            selects: {
                ...prevState.selects,
                [name]:{
                    ...prevState.selects[name],
                    searchValue: e.target.value,
                    filteredOptions: filteredArr
                }
            }
        }));
    }

    handleCustomSlect = (name, e) => {
        e.persist();

        this.setState(prevState => ({
            selects: {
                ...prevState.selects,
                [name]:{
                    ...prevState.selects[name],
                    value: e.target.dataset.value,
                    searchValue: ''
                }
            }
        }));

        setTimeout(() => {
            this.hanleDropdownToggle(name);
        }, 200);
    }

    hanleDropdownToggle = (name) => {
        const {selects} = this.state;

        if (name === 'paperType') {

            this.setState(prevState => ({
                selects: {
                    ...prevState.selects,
                    [name]:{
                        ...prevState.selects[name],
                        dropdownOpen: !this.state.selects[name].dropdownOpen,
                        filteredOptions: (selects.paperType.filteredOptions[0] && 
                                            selects.paperType.filteredOptions[0].val === '17') ?
                                            selects.paperType.filteredOptions :
                                            ''
                    }
                }
            }));
            
        } else {
            this.setState(prevState => ({
                selects: {
                    ...prevState.selects,
                    [name]:{
                        ...prevState.selects[name],
                        dropdownOpen: !this.state.selects[name].dropdownOpen,
                        filteredOptions: ''
                    }
                }
            }));

        }

    }

    handleRangeChange = (data, e) => {
        e.persist();

        let validValue;

        if (+e.target.value < data.min) {
            validValue = data.min;
        } else if (+e.target.value > data.max) {
            validValue = data.max;
        } else {
            validValue = e.target.value;
        }

        this.setState(prevState => ({
            ranges: {
                ...prevState.ranges,
                [data.name]:{
                    ...prevState.ranges[data.name],
                    value: validValue
                }
            }
        }));
    }

    render() {
        const {pills, selects, ranges } = this.state;

        return (
            <div>
                {Object.values(pills).map((item, index) =>(
                    <PillsGroup 
                        key={index}
                        data={item}
                        handlePillsClick={this.handlePillsClick}
                    />
                ))}

                <div className="select-container">
                    {Object.values(selects).map((item, index) =>(
                        <SelectGroup
                            key={index}
                            data={item}
                            searchDisabled={item.searchDisabled}
                            // handleSelect={this.handleSelect}
                            handleSearch={this.handleSearch}
                            hanleDropdownToggle={this.hanleDropdownToggle}
                            handleCustomSlect={this.handleCustomSlect}
                        />
                    ))}
                </div>

                <div className="ranges-container">
                    {Object.values(ranges).map((item, index) => (
                        <Range 
                            key={index}
                            data={item} 
                            handleRangeChange={this.handleRangeChange} 
                        />
                    ))}
                </div>    
            </div>
        );
    }
}
