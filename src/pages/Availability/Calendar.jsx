import React, {useState} from 'react';
import {link} from "react-router-dom"
import Calendar from 'react-calendar'
import Inquiry from './Inquiry.jsx'
import './calendar.css';
// import BigCalendar from "react-big-calendar";


export default function Calend({handleTargetDate}) {

    const [value, onChange] = useState(new Date());

    
    return (
        <div>
            <Calendar 
            onChange={onChange} value={value}
            onClickDay = {handleTargetDate}
            
            />

        </div>
    )
}