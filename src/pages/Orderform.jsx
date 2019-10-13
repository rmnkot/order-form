import React, { Component } from 'react';
import OrderformControls from '../components/orderform/OrderformControls';
import OrderformDetails from '../components/orderform/OrderformDetails';

export default class Orderform extends Component {
    render() {
        return (
            <>
                <h1>Make a new order</h1>
                <form>
                    <OrderformControls />
                    <OrderformDetails />
                </form>
            </>
        );
    }
}
