import React from 'react';
import './styles.scss'

const SelectInput = (props) => {
    return (
        <div className='input-container'>
            <label className='input-label'>{props?.label}</label>
            <select>
                <option>Select</option>
                {
                    props.options?.map((item,index) => 
                    <option key={index}>{item}</option>
                    )
                }
            </select>
        </div>
    )
}

export default SelectInput