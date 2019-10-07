import React, { Component } from 'react';

export default class Range extends Component {
    render() {
        const {data, handleRangeChange} = this.props;

        return (
            <div>
                <div>
                    <input 
                        id="pages-count" 
                        type="text" 
                        name="pages-count-value" 
                        value={data.value} 
                        onChange={handleRangeChange.bind(null, data)} 
                    />

                    <span>{data.label}</span>
                    {data.output && <span id="words-count" >~{+data.value * 300} words</span>}
                </div>

                <div>
                    <input 
                        id="pages" 
                        name="pages" 
                        type="range" 
                        min={data.min} 
                        max={data.max} 
                        value={data.value}
                        onChange={handleRangeChange.bind(null, data)}
                    />
                </div>
            </div>
        );
    }
}
