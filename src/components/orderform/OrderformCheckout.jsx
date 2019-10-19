import React from 'react';
import {Link} from 'react-router-dom';


export default function OrderformCheckout() {

    return (
        <div>
            <h1>Checkout</h1>

            <p>
                <Link to="/orderform/details">&lt; Prev</Link>
            </p>
        </div>
    );
}
