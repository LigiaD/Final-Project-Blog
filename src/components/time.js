import React from 'react';

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
export default function Time({date}) {
    return (
        <div className='time'>
            <div className='time__day'>{date.getDate()}</div>
            <div className='time__month-year'>{months[date.getMonth()]} {date.getFullYear()}</div>
            <div className='time__point'></div>
        </div>
        
    
        
    )
}