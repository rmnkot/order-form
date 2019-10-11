import React from 'react';

export default function Switch({spacing, handleSpacing}) {
    return (
        <label className="switch-label" htmlFor="spacing">
            <span className={`switch-status ${(spacing === '1') ? 'disabled': ''}`} >Double Spaced</span>

            <input 
                id="spacing" 
                name="spacing" 
                type="checkbox" 
                className="switch" 
                checked={(spacing === '1') || false}
                onChange={handleSpacing}
            />

            <span className="lever"></span>

            <span className={`switch-status ${(spacing === '2') ? 'disabled': ''}`} >Single Spaced</span>
        </label>
    );
}
