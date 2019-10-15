import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class OrderformCheckout extends Component {
    render() {
        return (
            <div>
                <h1>Checkout</h1>

                <p>
                    <Link to="/orderform/details">Prev ></Link>
                </p>
            </div>
        )
    }
}
