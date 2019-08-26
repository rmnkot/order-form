import React, { Component } from 'react';

export default class Subject extends Component {
    render() {
        return (
            <div>
                <h5>Subject</h5>
                <select id="subject" name="subject">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        );
    }
}

