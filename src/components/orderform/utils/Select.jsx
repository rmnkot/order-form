import React from 'react';

export default function Select({data, handleSelect, handleCustomSlect}) {

    const setArr = () => {
        let tempArr = [];

        data.options.forEach(item => (
            item.optgroup ?
                tempArr.push(...item.optgroup) :
                tempArr.push(item)
        ))

        return tempArr;
    }

    return (
        <div>
            <select 
                name={data.name} 
                id={data.id} 
                className="original-select" 
                tabIndex="-1" 
                aria-hidden="true"
                value={data.value}
                onChange={handleSelect}
            >
                {data.options.map(item => (
                    item.optgroup ?
                        <optgroup label={item.text} key={item.val} >
                            {item.optgroup.map(item => (
                                <option 
                                    key={item.val}
                                    value={item.val} 
                                    disabled={item.disabled && 'disabled'} 
                                >
                                    {item.text}
                                </option>                            
                            ))}
                        </optgroup> :
                        <option 
                            key={item.val}
                            value={item.val} 
                            disabled={item.disabled && 'disabled'} 
                        >
                            {item.text}
                        </option>
                ))}
            </select>

            <span className="select-placeholder">
                {setArr().find(item => (
                    item.val === data.value
                )).text}
            </span>
            
            <ul className="custom-select">
                {data.options.map(item => (
                    item.optgroup ?
                        <li key={item.val}>
                            <span>{item.text}</span>
                            <ul>
                                {item.optgroup.map(item => (
                                    !item.disabled && 
                                        <li 
                                            key={item.val} 
                                            data-value={item.val}
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
                                onClick={handleCustomSlect.bind(null, data.name)}
                            >
                                {item.text}
                            </li>
                ))}
            </ul>
        </div>
    );
}