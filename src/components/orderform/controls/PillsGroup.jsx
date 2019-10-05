import React from 'react'
import PillButton from './../utils/PillButton';

export default function PillsGroup({data, handlePillsClick}) {
    return (
        <div>
            <h5>{data.lable}</h5>
            <div>
                {data.params.map((item, index) => (
                    <PillButton 
                        key={item.id}
                        name={data.name}
                        value={data.value}
                        type={data.type}
                        params={item}
                        index={index} 
                        handlePillsClick={handlePillsClick}
                    />
                ))}
            </div>
        </div>
    )
}
