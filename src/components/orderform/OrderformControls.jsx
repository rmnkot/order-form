import React, { Component } from 'react';
// import { FaPencilAlt, FaParagraph, FaDesktop } from 'react-icons/fa';
import {Link, withRouter} from 'react-router-dom';

import {store} from './store/store';
import { handleSpacing, updateLocalStorage } from './functions';

import PillsGroup from './controls/PillsGroup';
import SelectGroup from './controls/SelectGroup';
import Range from './utils/Range';
import Switch from './utils/Switch';

class OrderformControls extends Component {
    state = store;

    handlePillsClick = (e) => {
        e.persist();

        this.setState(prevState => ({
            workType: {
                ...prevState.workType,
                value: e.target.value
            }
        }), () => {

            if (e.target.name === 'workType' && this.state.workType.value === '3') {

                this.setState(prevState => ({
                    selects: {
                        ...prevState.selects,
                        paperType: {
                            ...prevState.selects.paperType,
                            value: '17',
                            filteredOptions: [{ id: 17, name: 'PowerPoint Presentation' }],
                            searchDisabled: true
                        }
                    }
                }));

            } else if (e.target.name === 'workType' && this.state.workType.value !== '3') {

                this.setState(prevState => ({
                    selects: {
                        ...prevState.selects,
                        paperType: {
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

    handleSearch = (name, e) => {
        e.persist();

        let filteredArr = [];

        const options = JSON.parse(JSON.stringify(this.state.selects[name].options));

        options.forEach(item => {

            if (item.optgroup) {
                const optgroupEl = item;

                optgroupEl.optgroup = item.optgroup.filter(item => (
                    item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
                ));

                optgroupEl.optgroup.length && filteredArr.push(optgroupEl)

            } else {
                (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) && filteredArr.push(item)
            }
        });

        this.setState(prevState => ({
            selects: {
                ...prevState.selects,
                [name]: {
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
                [name]: {
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
        const { selects } = this.state;

        if (name === 'paperType') {

            this.setState(prevState => ({
                selects: {
                    ...prevState.selects,
                    [name]: {
                        ...prevState.selects[name],
                        dropdownOpen: !this.state.selects[name].dropdownOpen,
                        filteredOptions: (selects.paperType.filteredOptions[0] &&
                            selects.paperType.filteredOptions[0].id === 17) ?
                            selects.paperType.filteredOptions :
                            ''
                    }
                }
            }));

        } else {
            this.setState(prevState => ({
                selects: {
                    ...prevState.selects,
                    [name]: {
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
                [data.name]: {
                    ...prevState.ranges[data.name],
                    value: validValue
                }
            }
        }));
    }

    /*handleSpacing = () => {

        this.setState({
            spacing: this.state.spacing === '2' ? '1' : '2'
        })
    }

    updateLocalStorage = () => {
        const {pills, selects, ranges, spacing } = this.state;

        const orderSnapshot = {
            workType: pills.workType.value,
            academicLevel: pills.academicLevel.value,
            paperFormat: pills.paperFormat.value,
            paperType: selects.paperType.value,
            subject: selects.subject.value,
            pages: ranges.pages.value,
            sources: ranges.sources.value,
            spacing: spacing
        }

        window.localStorage.setItem('orderSnapshot', JSON.stringify(orderSnapshot));
    }*/

    componentDidUpdate = () => {
        updateLocalStorage.bind(this)();
    }


    render() {
        const { workType, selects, ranges, spacing } = this.state;
        const {match} = this.props;
        

        return (
            <div>
                <PillsGroup data={workType} handlePillsClick={this.handlePillsClick} />

                <div className="select-container">
                    {Object.values(selects).map((item, index) => (
                        <SelectGroup
                            key={index}
                            data={item}
                            searchDisabled={item.searchDisabled}
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
                <div className="spacing-container">
                    <h5>Spacing</h5>
                    <Switch spacing={spacing} handleSpacing={handleSpacing.bind(this)} />
                </div>
                {(match.path === '/orderform') || <p>
                    <Link to="/orderform/details">Next &gt;</Link>
                </p>}
            </div>
        );
    }
}

export default withRouter(OrderformControls);
