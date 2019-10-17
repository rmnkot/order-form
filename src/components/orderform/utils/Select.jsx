import React from 'react';

export default function Select({data, handleSearch, hanleDropdownToggle, handleCustomSlect, searchDisabled}) {
    
    const filteredOptionList = !data.filteredOptions ? data.options : data.filteredOptions;

    const setArr = () => {
        let tempArr = [];

        filteredOptionList.forEach(item => {
            item.optgroup ?
                tempArr.push(...item.optgroup) :
                tempArr.push(item)
        })

        return tempArr;
    }

    return (
        <div className="select-box">
            <span 
                className="select-placeholder"
                onClick={hanleDropdownToggle.bind(null, data.name)}
            >
                {(setArr().find(item => item.id === +data.value) && 
                    setArr().find(item => item.id === +data.value).name) || 
                        (data.options[0] && data.options[0].name)}
                &nbsp;▼
            </span>
            
            {data.dropdownOpen &&
                <div className="dropdown">
                    <input 
                        type="text" 
                        name="search" 
                        id="select-search" 
                        autoComplete="off"
                        disabled={searchDisabled}                        
                        value={data.searchValue}
                        onChange={handleSearch.bind(null, data.name)}
                    />
            
                    <ul className="custom-select">
                        {filteredOptionList.map(item => (
                            item.optgroup ?
                                <li key={item.id}>
                                    <span>{item.name}</span>
                                    <ul>
                                        {item.optgroup.map(item => (
                                            !item.disabled && 
                                                <li 
                                                    key={item.id} 
                                                    data-value={item.id}
                                                    className="list-item"
                                                    onClick={handleCustomSlect.bind(null, data.name)}
                                                >
                                                    {item.name}
                                                </li> 
                                        ))}
                                    </ul>
                                </li> :
                                !item.disabled &&
                                    <li 
                                        key={item.id}
                                        data-value={item.id}
                                        className="list-item"
                                        onClick={handleCustomSlect.bind(null, data.name)}
                                    >
                                        {item.name}
                                    </li>
                        ))}
                    </ul>
                </div>}
        </div>
    );
}