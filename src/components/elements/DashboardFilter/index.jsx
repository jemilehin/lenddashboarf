import React from 'react';
import {BiCalendar} from '@react-icons/all-files/bi/BiCalendar'
import './styles.scss'
import SelectInput from '../Inputs/InputSelection';
import TextInput from '../Inputs/InputText';
import ButtonOutline from '../Button/ButtonOutline';
import ButtonFill from '../Button/ButtonFill';

export const DashboardFilter = (props) => {

    return(
        <div className='filter-container'>
           <SelectInput label='Organization'  />
           <TextInput type='text' label='Username' placeholder='User'/>
           <TextInput type='email' label='Email' placeholder='Email'/>
           <TextInput type='date' label='Date' placeholder='Date'
            // iconElement={<div className='input-icon-wrapper'><BiCalendar /></div>}
            />
           <TextInput type='text' label='Phone Number' placeholder='Phone Number'/>
           <SelectInput label='Status'/>
           <div className='btn-container'>
                <ButtonOutline text='Reset' className='btn-width'/>
                <ButtonFill text='Filter' className='btn-width'/>
           </div>
        </div>
    )
}