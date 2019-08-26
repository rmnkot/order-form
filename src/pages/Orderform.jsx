import React, { Component } from 'react';
import OrderformControls from '../components/orderform/OrderformControls';

export default class Orderform extends Component {
    render() {
        return (
            <form>
                <OrderformControls />
            </form>
        );
    }
}
