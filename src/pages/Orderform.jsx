import React, { Component } from 'react';
import OrderformControls from '../components/orderform/OrderformControls';

export default class Orderform extends Component {
    render() {
        return (
            <>
                <h1>Make a new order</h1>
                <form>
                    <OrderformControls />
                </form>
            </>
        );
    }
}
