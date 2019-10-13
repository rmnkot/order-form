import React, { Component } from 'react';
import FieldGroup from './controls/FieldGroup';

export default class OrderformDetails extends Component {
    state = {
        title: {
            id: 'title',
            name: 'title',
            type: 'text',
            maxlength: '250',
            value: '',
            placeholder: [
                'Will the Implementation of Blockchain Technology Change the HR?',
                'Internal Recruiting: Advantages and Legal Issues That may Arise',
                'How Does the Effective Management at the Multinational Company Look Like?',
                'Should a Manager Always Be a Leader?',
                'Binomial Denominators',
                'How Do Developed Countries Benefit from Globalization?',
                'How Can Governments Control the Inflation Rate?',
                'World Health Organization Ethical Principles',
                'Leadership in Nursing',
                'Will the Humanity Travel to Mars in the next 10 Years?',
                'The Nature of Moonquakes'            
            ],
            label: 'Title'
        }
    }

    handleFormField = (e) => {
        e.persist();

        this.setState(prevState => ({
            [e.target.id]: {
                ...prevState[e.target.id],
                value: e.target.value
            }
        }));
    }

    render() {
        const {title} = this.state;

        return (
            <div>
                <FieldGroup title={title} handleFormField={this.handleFormField} />
            </div>
        );
    }
}
