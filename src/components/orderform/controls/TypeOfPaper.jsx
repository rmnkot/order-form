import React, { Component } from 'react';

export default class TypeOfPaper extends Component {
    render() {
        return (
            <div>
                <h5>Type of Paper</h5>
                <select name="paperType" id="paperType">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        );
    }
}
