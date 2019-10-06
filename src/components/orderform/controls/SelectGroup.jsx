import React from 'react';
import Select from '../utils/Select';

export default function SelectGroup({data, handleSelect, handleSearch, hanleDropdownToggle, handleCustomSlect, searchDisabled}) {
    return (
        <div>
            <h5>{data.label}</h5>
            <Select 
                data={data}
                // handleSelect={handleSelect}
                searchDisabled={searchDisabled}
                handleSearch={handleSearch}
                hanleDropdownToggle={hanleDropdownToggle}
                handleCustomSlect={handleCustomSlect}
            />
        </div>
);
}
