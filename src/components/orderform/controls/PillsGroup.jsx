import React, {Component} from 'react';
import PillButton from './../utils/PillButton';
import {connect} from 'react-redux';
import { setWorkType } from '../../../redux/actions/workTypeAction';

class PillsGroup extends Component {

    render() {
        const {data, setWorkType} = this.props;

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
                            handlePillsClick={setWorkType}
                            data-test="pill-button"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.workType
});

const mapDispatchToProps = {
    setWorkType
}

export default connect(mapStateToProps, mapDispatchToProps)(PillsGroup);