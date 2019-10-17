import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import OrderformControls from '../components/orderform/OrderformControls';
import OrderformDetails from '../components/orderform/OrderformDetails';
import OrderformCheckout from '../components/orderform/OrderformCheckout';
import Loading from '../components/orderform/utils/Loading';
import Page404 from './Page404';
import { store } from './../components/orderform/store/store';

export default class Orderform extends Component {
    state = store;

    componentDidMount = () => {
        const {siteCategoryId} = this.state;

        const fetchWorkTypes = new Promise((resolve) => {

            fetch(`https://pro-essay-writer.db.rv.ua/api/en/sites/categories/${siteCategoryId}/orders/work_types`)
            .then(response => response.json())
            .then(data => {

                this.setState(prevState => ({
                    workType: {
                        ...prevState.workType,
                        params: data
                    }
                }));

                resolve();
            });
        });

        const fetchAcademicLevel = new Promise((resolve) => {

            fetch(`https://pro-essay-writer.db.rv.ua/api/en/orders/academic_levels`)
            .then(response => response.json())
            .then(data => {

                this.setState(prevState => ({
                    selects: {
                        ...prevState.selects,
                        academicLevel: {
                            ...prevState.selects.academicLevel,
                            options: data
                        }
                    }
                }));

                resolve();
            });
        });

        const fetchPaperFormats = new Promise((resolve) => {

            fetch(`https://pro-essay-writer.db.rv.ua/api/en/orders/paper_formats`)
            .then(response => response.json())
            .then(data => {

                this.setState(prevState => ({
                    selects: {
                        ...prevState.selects,
                        paperFormat: {
                            ...prevState.selects.paperFormat,
                            options: data
                        }
                    }
                }));

                resolve();
            });
        });

        Promise.all([fetchWorkTypes, fetchAcademicLevel, fetchPaperFormats])
            .then(() => {
                this.setState({isLoading: false});
            })
    }

    render() {
        const {isLoading} =this.state;
        return (
            <BrowserRouter>
                <h1>Make a new order</h1>
                <form>
                    <Switch>
                        <Route 
                            exact 
                            path="/orderform/controls" 
                            component={isLoading ? Loading : OrderformControls} 
                        />
                        <Route exact path="/orderform/details" component={OrderformDetails} />
                        <Route exact path="/orderform/checkout" component={OrderformCheckout} />
                        <Route exact path="/orderform">
                            {isLoading ? <Loading /> : 
                                <>
                                    <OrderformControls />
                                    <OrderformDetails />
                                    <OrderformCheckout />
                                </>
                            }
                        </Route>
                        <Route component={Page404} />
                    </Switch>
                </form>
            </BrowserRouter>
        );
    }
}
