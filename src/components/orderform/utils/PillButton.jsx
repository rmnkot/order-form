import React from 'react';

export default function PillButton({name, value, type, params, index, handlePillsClick}) {

    return (
        <label 
            className={`pill-button ${(+value === index + 1) ? 'active': ''}`}
        >
            <input 
                name={name} 
                value={index + 1} 
                type={type} 
                onChange={e => handlePillsClick(e)}
                checked={(+value === index + 1) || false} 
            />
            {params.icon}
            {params.text}
            <span>{params.comment}</span>
        </label>
    );
}