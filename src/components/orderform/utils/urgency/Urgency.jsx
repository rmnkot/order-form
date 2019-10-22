import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UrgencyDate from './UrgencyDate';
import UrgencyChoice from './UrgencyChoice';

export default class Urgency extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <div>
                <UrgencyDate />
                <UrgencyChoice />
            </div>
        );
    }
}
