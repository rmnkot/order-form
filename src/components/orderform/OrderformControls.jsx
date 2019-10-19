import React from 'react';
import {Link, withRouter} from 'react-router-dom';
// import { FaPencilAlt, FaParagraph, FaDesktop } from 'react-icons/fa';

import PillsGroup from './controls/PillsGroup';
import SelectGroup from './controls/SelectGroup';
import Range from './utils/Range';
import Switch from './utils/Switch';

function OrderformControls({ workType, selects, ranges, spacing, handlePillsClick, handleSearch, handleCustomSlect, hanleDropdownToggle, handleRangeChange, handleSpacing, match }) {

    return (
        <div>
            <PillsGroup data={workType} handlePillsClick={handlePillsClick} />

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

export default withRouter(OrderformControls);