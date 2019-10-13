import React from 'react';
import FormField from './../utils/FormField';

export default function FieldGroup({ title, handleFormField }) {
    return (
        <div>
            <h5>{title.label}</h5>
            <FormField title={title} handleFormField={handleFormField} />
        </div>
    );
}
