import React from 'react';
import {Link} from 'react-router-dom';

import FieldGroup from './controls/FieldGroup';
import AreaGroup from './controls/AreaGroup';

export default function OrderformDetails({ title, paperDetails, handleFormField }) {

    return (
        <div>
            <FieldGroup title={title} handleFormField={handleFormField} />
            <AreaGroup paperDetails={paperDetails} handleFormField={handleFormField} />
            <p>
                <Link to="/orderform/controls">&lt; Prev </Link>
                &nbsp;
                <Link to="/orderform/checkout">Next &gt;</Link>
            </p>

        </div>
    );
}
