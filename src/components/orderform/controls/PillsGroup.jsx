import React from 'react'
import PillButton from './../utils/PillButton';

export default function PillsGroup({ data, handlePillsClick }) {
    return (
        <div>
            <h5>{data.label}</h5>
            <div>
                {data.params.map((item) => (
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
