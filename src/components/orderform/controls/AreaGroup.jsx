import React from 'react';
import TextArea from '../utils/TextArea';

export default function AreaGroup({ paperDetails, handleFormField }) {
    console.log('paperDetails', paperDetails);

    return (
        <div>
            <h5>{paperDetails.label}</h5>
            <TextArea paperDetails={paperDetails} handleFormField={handleFormField} />
        </div>
    );
}
