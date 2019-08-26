import React, { Component } from 'react';

export default class AcademicLevel extends Component {
    render() {
        return (
            <div>
                <h5>Academic Level</h5>
                <div>
                    <label className="button">
                        <input name="academicLevel" value="1" type="radio" />
                        High school
                    </label>
                    <label className="button">
                        <input name="academicLevel" value="2" type="radio" />
                        College
                    </label>
                    <label className="button">
                        <input name="academicLevel" value="3" type="radio" />
                        University
                    </label>
                    <label className="button">
                        <input name="academicLevel" value="4" type="radio" />
                        Master`s
                    </label>
                    <label className="button">
                        <input name="academicLevel" value="5" type="radio" />
                        Ph.D.
                    </label>
                </div>

            </div>
        );
    }
}
