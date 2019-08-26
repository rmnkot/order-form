import React, { Component } from 'react';

export default class Pages extends Component {
    render() {
        return (
            <div>
                <div>
                    <input id="pages-count" type="number" name="pages-count-value" min="0" max="100" />

                    <span> Pages</span>
                    <p id="words-count" >&nbsp;</p>
                </div>

                <div>
                    <div>
                        <input id="pages" name="pages" type="range" min="1" max="100" />
                    </div>
                </div>
            </div>
        );
    }
}
