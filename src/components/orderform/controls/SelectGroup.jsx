import React from 'react';
import Select from '../utils/Select';

export default function SelectGroup({data, handleSearch, hanleDropdownToggle, handleCustomSlect, searchDisabled}) {
    return (
        <div>
            <h5>{data.label}</h5>
            <Select 
                data={data}
                searchDisabled={searchDisabled}
                handleSearch={handleSearch}
                hanleDropdownToggle={hanleDropdownToggle}
                handleCustomSlect={handleCustomSlect}
            />
        </div>
);
}
