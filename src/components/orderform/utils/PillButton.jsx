import React from 'react';

export default function PillButton({name, value, params, handlePillsClick}) {

    return (
        <label 
            className={`pill-button ${(+value === params.id) ? 'active': ''}`}
        >
            <input 
                name={name} 
                value={params.id} 
                type="radio"
                checked={(+value === params.id) || false} 
                onChange={e => handlePillsClick(e)}
            />
            {/* {params.icon}
            {params.text} */}
            {params.name}
            {/* <span>{params.comment}</span> */}
        </label>
    );
}