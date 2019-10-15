import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import OrderformControls from '../components/orderform/OrderformControls';
import OrderformDetails from '../components/orderform/OrderformDetails';
import OrderformCheckout from '../components/orderform/OrderformCheckout';

export default class Orderform extends Component {
    render() {
        return (
            <BrowserRouter>
                <h1>Make a new order</h1>
                <form>
                    <Switch>
                        <Route exact path="/orderform/controls" component={OrderformControls} />
                        <Route exact path="/orderform/details" component={OrderformDetails} />
                        <Route exact path="/orderform/checkout" component={OrderformCheckout} />
                        <Route path="/orderform">
                            <OrderformControls />
                            <OrderformDetails />
                            <OrderformCheckout />
                        </Route>
                    </Switch>
                </form>
            </BrowserRouter>
        );
    }
}
