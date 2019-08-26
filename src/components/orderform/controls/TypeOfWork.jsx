import React, { Component } from 'react';
import { FaPencilAlt, FaParagraph, FaDesktop } from 'react-icons/fa';


export default class TypeOfWork extends Component {
    render() {
        return (
            <div>
                <h5>Select Type of Work</h5>
                <div>
                    <label className="button">
                        <input name="workType" value="1" type="radio" />
                        <FaPencilAlt />
                        WRITING
                        <span>from scratch</span>
                    </label>
                    <label className="button">
                        <input name="workType" value="2" type="radio" />
                        <FaParagraph />
                        EDITING
                        <span>existing paper</span>
                    </label>
                    <label className="button">
                        <input name="workType" value="3" type="radio" />
                        <FaDesktop />
                        SLIDES
                        <span>presentation</span>
                    </label>
                </div>
            </div>
        );
    }
}
