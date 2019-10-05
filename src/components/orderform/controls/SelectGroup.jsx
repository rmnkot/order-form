import React from 'react';
import Select from '../utils/Select';

export default function SelectGroup({data, handleSelect, handleCustomSlect}) {
    return (
        <div>
            <h5>{data.label}</h5>
            <Select 
                data={data}
                handleSelect={handleSelect}
                handleCustomSlect={handleCustomSlect}
            />
        </div>
);
}
