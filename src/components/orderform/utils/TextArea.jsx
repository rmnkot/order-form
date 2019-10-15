import React from 'react';

export default function TextArea({ paperDetails, handleFormField }) {
    return (
        <div>
            <textarea id={paperDetails.id} name={paperDetails.name} value={paperDetails.value} onChange={handleFormField} ></textarea>
        </div>
    );
}
