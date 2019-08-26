import React, { Component } from 'react';

export default class PaperFormat extends Component {
    render() {
        return (
            <div>
                <h5>Paper Format</h5>
                <div>
                    <label className="button">
                        <input name="paperFormat" value="MLA" type="radio" />
                        MLA
                    </label>
                    <label className="button">
                        <input name="paperFormat" value="APA" type="radio" />
                        APA
                    </label>
                    <label className="button">
                        <input name="paperFormat" value="Chicago" type="radio" />
                        Chicago
                    </label>
                    <label className="button">
                        <input name="paperFormat" value="Harvard" type="radio" />
                        Harvard
                    </label>
                    <label className="button">
                        <input name="paperFormat" value="Other" type="radio" />
                        Other
                    </label>
                </div>

            </div>
        );
    }
}
