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
                {(setArr().find(item => item.val === data.value) && 
                    setArr().find(item => item.val === data.value).text) || 
                        data.options[0].text}
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
                                <li key={item.val}>
                                    <span>{item.text}</span>
                                    <ul>
                                        {item.optgroup.map(item => (
                                            !item.disabled && 
                                                <li 
                                                    key={item.val} 
                                                    data-value={item.val}
                                                    className="list-item"
                                                    onClick={handleCustomSlect.bind(null, data.name)}
                                                >
                                                    {item.text}
                                                </li> 
                                        ))}
                                    </ul>
                                </li> :
                                !item.disabled &&
                                    <li 
                                        key={item.val}
                                        data-value={item.val}
                                        className="list-item"
                                        onClick={handleCustomSlect.bind(null, data.name)}
                                    >
                                        {item.text}
                                    </li>
                        ))}
                    </ul>
                </div>}
        </div>
    );
}