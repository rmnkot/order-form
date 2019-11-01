import React, {Component} from 'react';
import PillButton from './../utils/PillButton';
import {connect} from 'react-redux';

class PillsGroup extends Component {

    render() {
        const {data, handlePillsClick} = this.props;

        return (
            <div>
                <h5>{data.label}</h5>
                <div>
                    {data.params && data.params.map((item) => (
                        <PillButton
                            key={item.id}
                            name={data.name}
                            value={data.value}
                            params={item}
                            handlePillsClick={handlePillsClick}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.workTypeReducer.workType
});

export default connect(mapStateToProps)(PillsGroup);