import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { compose } from 'redux';
import {connect} from 'react-redux';
// import { FaPencilAlt, FaParagraph, FaDesktop } from 'react-icons/fa';

import PillsGroup from './controls/PillsGroup';
import SelectGroup from './controls/SelectGroup';
import Range from './utils/Range';
import Switch from './utils/Switch';

function OrderformControls({ selects, reduxSelects, ranges, spacing, handleSearch, handleCustomSlect, hanleDropdownToggle, handleRangeChange, handleSpacing, match }) {

    return (
        <div>
            <PillsGroup />

            <div className="select-container">
                {Object.values(reduxSelects).map((item, index) => (
                    <SelectGroup
                        key={index + 'A'}
                        data={item}
                        searchDisabled={item.searchDisabled}
                        handleSearch={handleSearch}
                        hanleDropdownToggle={hanleDropdownToggle}
                        handleCustomSlect={handleCustomSlect}
                    />
                ))}
            </div>

            <div className="select-container">
                {Object.values(selects).map((item, index) => (
                    <SelectGroup
                        key={index}
                        data={item}
                        searchDisabled={item.searchDisabled}
                        handleSearch={handleSearch}
                        hanleDropdownToggle={hanleDropdownToggle}
                        handleCustomSlect={handleCustomSlect}
                    />
                ))}
            </div>

            <div className="ranges-container">
                {Object.values(ranges).map((item, index) => (
                    <Range
                        key={index}
                        data={item}
                        handleRangeChange={handleRangeChange}
                    />
                ))}
            </div>
            <div className="spacing-container">
                <h5>Spacing</h5>
                <Switch spacing={spacing} handleSpacing={handleSpacing} />
            </div>
            {(match.path === '/orderform') || <p>
                <Link to="/orderform/details">Next &gt;</Link>
            </p>}
        </div>
    );
}

const mapStateToProps = (store) => ({
    reduxSelects: {
        academicLevel: store.level,
        paperFormat: store.paperFormat
    }
})

export default compose(
    withRouter,
    connect(mapStateToProps)
)(OrderformControls);